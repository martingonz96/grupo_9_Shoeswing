import React from "react";

function ProductsList(props) {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{<img style={{width: 4+'rem'}} src={`http://localhost:3001/img/products/${props.img}`}/>}</td>
            </tr>
        </>
    )
}
export default ProductsList;