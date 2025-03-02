import React from 'react';
import '../css/contato.css';

function Contato() {
    return (
        <div className="main">
            <ul className="caminho">
                <li><a href="/">Home</a></li>
                <li>' ' -- ' ' </li>
                <li>Contato</li>
            </ul>
            <h1>Contato</h1>
            <h3>E-mail:</h3>
            <p>maryhsiano@hotmail.com</p>
            <h3>Telefone:</h3>
            <p>+55 32 99145-7238</p>
            <h3>Redes Sociais:</h3>
            <a href="https://www.facebook.com/maryh.siano/" target="_blank" rel="noreferrer">
                <img className="social-img" src="img/social/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/mariana_siano/" target="_blank" rel="noreferrer">
                <img className="social-img" src="img/social/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/mariana-siano/" target="_blank" rel="noreferrer">
                <img className="social-img" src="img/social/linkedin.png" alt="LinkedIn" />
            </a>
        </div>
    );
}

export default Contato;
