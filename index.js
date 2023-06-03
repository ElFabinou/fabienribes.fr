const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const favicon = require('serve-favicon');
const cron = require('node-cron');
const axios = require('axios');

app.use(favicon(path.join(__dirname, 'public', '/images/favicon/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/index.html'));
})

app.get('/projects/travel-agency', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/travel-agency.html'));
})

app.get('/projects/weather-station', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/weather-station.html'));
})

app.get('/projects/order-management-software', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/order-management-software.html'));
})

app.get('/projects/funkytown', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/funkytown.html'));
})

app.get('/projects/vms', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/vms.html'));
})

app.get('/projects/qstomize', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/qstomize.html'));
})

app.get('/projects/enedis', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/enedis.html'));
})

app.get('/projects/system-administrator', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/system-administrator.html'));
})

app.get('/projects/system-programming', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/system-programming.html'));
})

app.get('/projects/big-data', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/big-data.html'));
})

app.get('/projects/algorithmics', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/templates/project/algorithmics.html'));
})

app.listen(port, () => {
    console.log(`Lancement du portfolio sur le port : ${port}`)
})
cron.schedule('*/5 * * * *', () => {
    axios.get('https://fabienribes.com')
      .then(response => console.log('Pinged successfully'))
      .catch(error => console.error('Error pinging', error));
  });