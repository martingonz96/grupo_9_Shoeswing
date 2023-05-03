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
import { ImMenu } from 'react-icons/im';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function ProductsTable() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
                setLoading(false);
            })
    }, [])

    return (
        <>
            <Header />
            <div className="tableProduct">
                <ul className="navBar">
                    <li className="enlaces"><Link to='/'>Inicio <FaHome /></Link></li>
                    <li className="enlaces"><Link to='/users'>Usuarios <HiUsers /></Link></li>
                    <li className="enlaces"><Link to=''>Registrarse <FaRegIdCard /></Link></li>
                    <li className="enlaces"><Link to=''>Iniciar Sesión <ImEnter /></Link></li>
                    <li className="burgerMenu"><Link to=''><ImMenu /></Link></li>
                </ul>
                <h2>Listado de Productos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th className="image">Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ?
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                                :
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