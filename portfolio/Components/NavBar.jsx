import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return(
        <div className="nav navegacao">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/curriculo">Curriculo</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </div>
    );
}

export default Navbar