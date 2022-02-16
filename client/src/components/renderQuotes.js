import React, { useState } from 'react';
import { Card, Button, CardText, CardFooter, CardBody, CardHeader } from 'reactstrap';
import { useForm } from "react-hook-form";

export default function RenderTasks(props) {

    // Edit button clicked or not if yes the editMode state will take the id of the comment
    const [editMode, setEditMode] = useState("");
    const { register, handleSubmit } = useForm({ mode: "all" });

    const onSubmit = (data) => {
        props.handleUpdate(editMode, data);
        setEditMode("");
    }

    const cards = props.quotes.map(item => {
        return (
            <div key={item._id} className='col-3 mb-2'>
                <Card style={{ minHeight: "300px" }}>
                    <CardHeader>{item.author}</CardHeader>
                    <CardBody>
                        {
                            editMode === item._id ?
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <textarea rows={5} name="quote" type="textarea" defaultValue={item.quote}
                                        {...register("quote")}
                                    />
                                    <button type="submit" style={{ marginRight: "2px" }} className="btn btn-success">Done</button>
                                    <button onClick={() => setEditMode("")} type="button" className="btn btn-danger">Cancel</button>
                                </form>
                                :
                                <CardText>{item.quote}</CardText>
                        }

                    </CardBody>
                    <CardFooter>
                        <div className='row'>
                            <Button onClick={() => props.handleDelete(item._id)} className='btn-danger col-6' style={{ marginRight: "2px" }}>Remove</Button>
                            <Button onClick={() => setEditMode(item._id)} className='btn-success col'>Edit</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div >
        )
    })
    return (
        <div className='container'>
            <div className='row'>
                {cards}
            </div>
        </div>
    )
}
