const express = require('express');

const app = express();

app.use(express.static('./dist/workforce-employee'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/workforce-employee/'}),
);

app.listen(process.env.PORT || 8080);