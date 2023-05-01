import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
// import '../assets/css/productsList.css';
import Table from 'react-bootstrap/Table';

function ProductsTable() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [])

    return (
        <>
            <Header />
            <h2>Listado de Productos</h2>
            <div className="tableProduct">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return <ProductsList {...product} key={product + index} />;
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default ProductsTable;