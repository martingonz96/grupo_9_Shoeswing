import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductsList from "./ProductsList";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaRegIdCard } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import { HiUsers } from 'react-icons/Hi';

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
            <div className="tableProduct">
                <ul className="navBar">
                    <li><Link to='/'>Inicio <FaHome /></Link></li>
                    <li><Link to='/users'>Usuarios <HiUsers /></Link></li>
                    <li><Link to=''>Registrarse <FaRegIdCard /></Link></li>
                    <li><Link to=''>Iniciar Sesión <ImEnter /></Link></li>
                </ul>
                <h2>Listado de Productos</h2>
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
            <Footer />
        </>
    )
}
export default ProductsTable;