const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    // Sempre retornaremos um Vetor ou um Json
    return response.json([
        'Project - 1',
        'Project - 2',
        'Project - 3'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Project - 1',
        'Project - 2',
        'Project - 3',
        'Project - 4',
        'Project - 5',
        'Project - 3'
    ]);
});


app.put('/projects/:id', (request, response) => {
    return response.json([
        'Project - 1',
        'Project - 2',
        'Project - 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Project - 1',
        'Project - 2'
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!');
});