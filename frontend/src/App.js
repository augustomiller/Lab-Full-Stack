import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpeg';

export default function App() {

    /*
    * useState retorna um array com duas posiçoes
    * 1ª posicao: Variavel com seu valor inicial.
    * 2ª posicao: Funcao para atualizarmos esse valor.
    */
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        /*
        * Conceito de imutabilidade: Copiando o valor de "projects", adicionando
        * novas informaçoes e alterando seu valor de uma forma indireta.
        */
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImage} />

            <ul>
                {projects.map(project => (

                    <li key={project}>{project}</li>

                ))}
            </ul>

            <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
        </>
    );
}