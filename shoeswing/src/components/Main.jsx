import React from "react";
import Products from "./Products";
import Users from "./Users";

function Main() {
    return (
        <>
            <main>
                <div className="category">
                    <a className="products" href="">
                        <h2>Productos</h2>
                        <img src="../../public/img/botinesFondo (1).jpg" alt="" />
                    </a>
                    <a className="users" href="">
                        <h2>Usuarios</h2>
                        <img src="../../public/img/user-gd3f681f92_640.png" alt="" />
                    </a>
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
