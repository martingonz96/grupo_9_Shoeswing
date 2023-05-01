import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer>
                <div className="logo-blanco">
                    <img src="/img/Logo blanco.png" />
                </div>

                <div className="elemento-footer">
                    <h4> Nosotros </h4>
                    <p>Acerca de Nosotros</p>
                    <p>Contacto</p>
                </div>

                <div className="elemento-footer">
                    <h4> Más información </h4>
                    <p>Medios de Pago</p>
                    <p>Preguntas Frecuentes</p>
                    <p>Políticas de envío</p>
                </div>

                <div className="elemento-footer">
                    <h4> Seguinos </h4>
                    <div className="icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;