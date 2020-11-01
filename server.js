const express = require('express');

const app = express();

app.use(express.static('./dist/registration-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/registration-app/'}),
);

app.listen(process.env.PORT || 8080);