import React from "react";

function ProductsList(props) {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td id="imgTable">{<img style={{width: 4+'rem'}} src={`http://localhost:3000/img/products/${props.image}`}/>}</td>
            </tr>
        </>
    )
}
export default ProductsList;