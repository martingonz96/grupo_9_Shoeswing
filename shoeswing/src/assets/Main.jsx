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
                    </a>
                    <a className="users" href="">
                        <h2>Usuarios</h2>
                    </a>
                </div>

                <div className="cardProductDest">
                    <h2>Producto destacado</h2>
                    <div id="cardProductDest">
                        <Products />
                    </div>
                </div>

                <div className="usersList">
                    <h2>Usuarios</h2>
                    <Users />
                </div>
            </main>
        </>
    )
}
export default Main;
