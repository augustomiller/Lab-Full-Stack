const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {

    const { title, owner } = request.query;
    console.log(title);
    console.log(owner);

    return response.json([
        'Project - 1',
        'Project - 2',
        'Project - 3'
    ]);
});

app.post('/projects', (request, response) => {

    const body = request.body;
    console.log(body);

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

    const params = request.params;
    console.log(params);

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