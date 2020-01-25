const express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('Running on port 3000')
})