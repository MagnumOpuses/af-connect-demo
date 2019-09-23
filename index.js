const config = require('./lib/config');
const ejs = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const http = require('http');

let server = http.createServer(app);

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/img', express.static(__dirname+'/public/img'));
app.use('/js', express.static(__dirname+'/public/js'));
app.use('/fonts', express.static(__dirname+'/public/fonts'));
app.use('/vendor', express.static(__dirname+'/public/vendor'));
app.use('/favicon.ico', express.static(__dirname+'/public/favicon.ico'));

app.get('/', (req, res) => { res.render('pages/index'); });

app.post('/cvForm', (req, res) => {
    res.render('partials/cv-form', { data: req.body });
});

server.listen(config.port, config.host, () => console.log(`AF Connect Demo listening on: ${config.host}:${config.port} !`) );
