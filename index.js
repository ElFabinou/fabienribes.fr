const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', '/images/favicon/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/index.html'));
})

app.get('/projects/travel-agency', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/travel-agency.html'));
})

app.listen(port, () => {
    console.log(`Lancement du portfolio sur le port : ${port}`)
})