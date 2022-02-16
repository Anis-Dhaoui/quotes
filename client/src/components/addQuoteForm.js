import React from 'react';
import { useForm } from "react-hook-form";

export default function AddQuoteForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" placeholder="Title" className={errors.title ? "form-control is-invalid" : " form-control is-valid"}
                        {...register("title",
                            {
                                required: "Required field",
                                minLength: {
                                    value: 3,
                                    message: "Title should have at least 3 caracters"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Title should have at most 10 caracters"
                                }
                            })
                        }
                    />
                    {errors.title && (
                        <div className="invalid-feedback">{errors.title.message}</div>
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
                                    value: 30,
                                    message: "Quote should have at most 10 caracters"
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
                        errors.title || errors.quote ?
                            <button type="submit" className="btn btn-danger"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> Error </button>
                            :
                            <button type="submit" className="btn btn-success"><i className="fa fa-user-plus"></i> Post new quote </button>
                    }
                </div>

            </form>
        </div>
    )
}
