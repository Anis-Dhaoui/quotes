import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function RenderTasks(props) {
    const cards = props.tasks.map(item => {
        return (
            <div key={item.id} className='col-3 mb-2'>
                <Card body outline color="secondary">
                    <CardTitle className='text-center'>{item.title}</CardTitle>
                    <hr />
                    <CardText>{item.quote}</CardText>
                    <Button className='btn-danger'>Remove</Button>
                </Card>
            </div>
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
