import React from "react";
import Products from "./Products";
import Users from "./Users";
import { FaHome } from 'react-icons/fa';
import { FaRegIdCard } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <main>
                <ul className="navBar">
                    <li><Link to='/'>Inicio <FaHome /></Link></li>
                    <li><Link to=''>Registrarse <FaRegIdCard /></Link></li>
                    <li><Link to=''>Iniciar Sesión <ImEnter /></Link></li>
                </ul>
                <div className="category">
                    <Link to='/products ' className="products"> 
                        <h2>Productos</h2>
                        <img src="/img/botinesFondo (1).jpg" alt="" />
                    </Link>
                    <Link className="users" to='/users'>
                        <h2>Usuarios</h2>
                        <img src="/img/user-gd3f681f92_640.png" alt="" />
                    </Link>
                </div>

                <div className="produtsUsers">
                    <div className="cardProductDest">
                        <h2>Producto destacado</h2>
                        <div id="cardProductDest">
                            <Products />
                        </div>
                    </div>

                    <div className="usersList">
                        <h2>Usuarios</h2>
                        <div id="usersList">
                            <Users />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Main;
