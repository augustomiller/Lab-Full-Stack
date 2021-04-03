import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {

    /*
    * useState retorna um array com duas posiçoes
    * 1ª posicao: Variavel com seu valor inicial.
    * 2ª posicao: Funcao para atualizarmos esse valor.
    */
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        /*
        * Conceito de imutabilidade: Copiando o valor de "projects", adicionando
        * novas informaçoes e alterando seu valor de uma forma indireta.
        */
        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Maic Miller"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => (

                    <li key={project.id}>{project.title}</li>

                ))}
            </ul>

            <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
        </>
    );
}