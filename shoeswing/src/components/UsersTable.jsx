import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Table from 'react-bootstrap/Table';
import UsersListTable from "./UsersListTable";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaRegIdCard } from "react-icons/fa";
import { ImEnter } from 'react-icons/im';
import { GiClothes } from "react-icons/Gi";

function UsersTable() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setUsers(data.data)
            })
    }, [])

    return (
        <>
            <Header />
            <div className="usersTable">
                <ul className="navBar">
                    <li><Link to='/'>Inicio <FaHome /></Link></li>
                    <li><Link to='/products'>Productos <GiClothes /></Link></li>
                    <li><Link to=''>Registrarse <FaRegIdCard /></Link></li>
                    <li><Link to=''>Iniciar Sesión <ImEnter /></Link></li>
                </ul>
                <h2>Listado de Usuarios</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <UsersListTable {...user} key={user + index} />;
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    )
}
export default UsersTable;