import React from "react";
import '../css/Home.css';

function Home() {
    return(
        <div className="div capa">
            <div className="div profile-image">
                <img src="img/perfil/mari.jpeg" alt="Foto de Mariana Siano"/>
            </div>

            <div className="div profile-tittle">
                <h1>Mariana <span>Siano Pinto</span></h1>
            </div>
        </div>
    );
}

export default Home;