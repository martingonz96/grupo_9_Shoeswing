import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductDest(props) {
    return (
        <>
            <article>
                <img src={`http://localhost:3000/img/products/${props.image}`} alt={props.image} />
                <h3>{props.name}</h3><br></br>
                <p>{props.description}</p><br></br>
                <h4>$ {props.price}</h4><br></br>
                <h4>{props.discount} %</h4>
            </article>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: 15 + 'rem' }} src={`http://localhost:3000/img/products/${props.image}`} alt={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title><br></br>
                    <Card.Text>
                        {props.description}
                    </Card.Text><br></br>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$ {props.price}</ListGroup.Item><br></br>
                    <ListGroup.Item>{props.discount}%</ListGroup.Item>
                </ListGroup>
            </Card> */}
        </>
    )
}
export default ProductDest;