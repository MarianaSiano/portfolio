import React from 'react';
import '../css/projeto.css';

function Projeto({ image, link, title, description }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="miniatura">
            <a href={link}>
                <div className="blackbox">
                    <div className="blackbox-text">
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Projeto;
