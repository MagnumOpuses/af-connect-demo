const config = require('./lib/config');
const ejs = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const jwtService = require('./lib/jwt-service');
const portabilityApi = require('./lib/portability-api');
const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync(config.pkey, 'utf8');
const certificate = fs.readFileSync(config.sslcert, 'utf8');
const credentials = {key: privateKey, cert: certificate};


function getRequestCookie(req, name) {
    var value = '; ' + req.headers.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length == 2) return parts.pop().split(';').shift();
}

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
app.get('/import', (req, res) => { res.render('pages/import'); });
app.get('/inspect', (req, res) => { res.render('pages/inspect'); });
app.get('/complete', (req, res) => { res.render('pages/complete'); });

app.post('/form', (req, res) => {
    res.render('partials/cv-form', { data: req.body });
});

app.get('/cv', (req, res) => {
    let cookie = getRequestCookie(req, config.ssoCookieName);
    if (cookie === undefined) {
        console.log('No cookie supplied');
        res.sendStatus(401);
        return;
    }

    jwtService.token(cookie)
    .then(token => portabilityApi.cv(token))
    .then(cv => res.send(cv))
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.port, 'demotest.arbetsformedlingen.se', () => console.log(`Gravity Demo Site listening on port ${config.port}!`) );
//app.listen(config.port,'demotest.arbetsformedlingen.se', () => console.log(`Gravity Demo Site listening on port ${config.port}!`));