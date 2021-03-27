const express = require('express');

const app = express();

app.get('/', (request, response) => {
    // Sempre retornaremos um Vetor ou um Json
    return response.json({ message: 'Hello Go Stack!' });
});

app.listen(3333, () => {
    console.log('Back-end started!');
});