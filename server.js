const express = require('express');
const api = require('./api');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/courses/:name?', async (req, res) => {
    let data = {};
    const name = req.params.name ? req.params.name : ''
    const url = `/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=${name}`
    await api.get(url)
        .then(resp => {
            if (resp.status === 200) {
                data = resp.data
            }
        })
        .catch(error => {
            data = {
                error: true,
                message: 'There was an error fetching data.'
            }
        })
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})