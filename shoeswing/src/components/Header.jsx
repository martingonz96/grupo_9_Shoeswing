import React from "react";
import { RxMagnifyingGlass } from 'react-icons/rx';

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src='/img/Logo shoes.png' alt="Logo" />
                    <h1>Shoeswing</h1>
                </div>
                <div className="search-bar">
                    <form action="/search" method="GET">
                        <input type="text" placeholder="Buscar..." name="keywords" />
                            <button type="submit">< RxMagnifyingGlass className="i"/></button>
                    </form>
                </div>
            </header>
        </>
    )
}
export default Header;
