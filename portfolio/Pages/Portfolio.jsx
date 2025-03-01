import React from 'react';
import Projeto from '../Components/Projeto';
import '../css/portfolio';

function Portfolio() {
    return(
        <div className="div main">
            <ul className='caminho'>
                <li><a href='/'>Home</a></li>
                <li>' '-- ' '</li>
                <li>Portfolio</li>
            </ul>
            <h1>Trabalhos Recentes</h1>
            <Projeto
            image="img/trabalhos/dvmotos.png"
            link="processotraineee-dvmotos.html"
            title="DVMotos Store"
            description="Processo Trainee Code Jr. (Em Grupo)"
            />
        </div>
    );
}

export default Portfolio