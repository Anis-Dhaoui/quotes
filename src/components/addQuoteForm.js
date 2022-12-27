import React from 'react';
import { useForm } from "react-hook-form";

export default function AddQuoteForm(props) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "all" });
    const onSubmit = (data) => {
        props.handlePosteQuote(data);
        reset();
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input name="author" type="text" placeholder="Author" className={errors.author ? "form-control is-invalid" : " form-control is-valid"}
                        {...register("author",
                            {
                                required: "Required field",
                                minLength: {
                                    value: 3,
                                    message: "Author should have at least 3 caracters"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Author should have at most 20 caracters"
                                }
                            })
                        }
                    />
                    {errors.author && (
                        <div className="invalid-feedback">{errors.author.message}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="quote">Quote</label>
                    <textarea rows={5} name="quote" type="textarea" placeholder="Quote" className={errors.quote ? "form-control is-invalid" : " form-control is-valid"}
                        {...register("quote",
                            {
                                required: "Required field",
                                minLength: {
                                    value: 3,
                                    message: "Quote should have at least 3 caracters"
                                },
                                maxLength: {
                                    value: 150,
                                    message: "Quote should have at most 150 caracters"
                                }
                            })
                        }
                    />
                    {errors.quote && (
                        <div className="invalid-feedback">{errors.quote.message}</div>
                    )}
                </div>
                <div className="form-group d-flex justify-content-end p-2">
                    {
                        errors.author || errors.quote ?
                            <button type="submit" className="btn btn-danger"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> Error </button>
                            :
                            <button type="submit" className="btn btn-success"><i className="fa fa-user-plus"></i> Post new quote </button>
                    }
                </div>

            </form>
        </div>
    )
}
