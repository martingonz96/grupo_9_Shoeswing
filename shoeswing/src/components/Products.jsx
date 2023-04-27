import React, { useEffect, useState } from "react";
import ProductDest from "./ProductDest";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setProducts(data.data)
            })
    }, []);

    const getProductMoreExpensive = () => {
        const searchProduct = [...products].sort((a, b) => b.price - a.price);
        return searchProduct[0];
    }

    const moreExpensive = getProductMoreExpensive();

    return (
        <>
            <ProductDest {...moreExpensive} />
        </>
    )
}
export default Products;