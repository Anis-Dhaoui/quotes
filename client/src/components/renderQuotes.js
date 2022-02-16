import React from 'react';
import { Card, Button, CardText, CardFooter, CardBody, CardHeader } from 'reactstrap';

export default function RenderTasks(props) {
    console.log(props.quotes);
    const cards = props.quotes.map(item => {
        return (
            <div key={item._id} className='col-3 mb-2'>
                <Card style={{minHeight:"300px"}}>
                    <CardHeader>{item.author}</CardHeader>
                    <CardBody>
                        <CardText>{item.quote}</CardText>
                        
                    </CardBody>
                    <CardFooter>
                        <div className='row'>
                        <Button className='btn-danger col-6' style={{marginRight:"2px"}}>Remove</Button>
                        <Button className='btn-success col'>Edit</Button>
                        </div>
                    </CardFooter>
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
