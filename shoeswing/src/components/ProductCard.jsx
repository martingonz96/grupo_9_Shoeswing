import React from "react";

function ProductCard(props) {
    return (
        <>
            <article>
                <img src={`http://localhost:3000/img/products/${props.image}`} alt={props.image} />
                <h3>{props.name}</h3><br></br>
                <div id="productDescriptionCard">
                    <p>{props.description}</p><br></br>
                    <h4>$ {props.price}</h4><br></br>
                    <h4>{props.discount} % OFF</h4>
                </div>
            </article>
        </>
    )
}
export default ProductCard;