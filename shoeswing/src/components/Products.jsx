import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data);
                setLoading(false);
            })
    }, []);

    const getProductMoreExpensive = () => {
        const searchProduct = [...products].sort((a, b) => b.price - a.price);
        return searchProduct[0];
    }

    const moreExpensive = getProductMoreExpensive();

    return (
        <>
            {
                loading ?
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                    :
                    <ProductCard {...moreExpensive} />
            }
        </>
    )
}
export default Products;