const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.post('/counter', (req, res) => {
    counter += 1;
    res.send(`Count increased`);
});

app.get('/counter', (req, res) => {
    res.send(`Count: ${counter}`);
});

app.delete('/counter', (req, res) => {
    counter = 0;
    res.send('Counter reset to 0')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);