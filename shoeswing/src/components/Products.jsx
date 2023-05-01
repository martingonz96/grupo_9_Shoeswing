import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
            <ProductCard {...moreExpensive} />
        </>
    )
}
export default Products;