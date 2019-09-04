const config = require('./lib/config');
const ejs = require('ejs');
const express = require('express');
const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.use('/css', express.static(__dirname+'/public/css'));
app.use('/img', express.static(__dirname+'/public/img'));
app.use('/js', express.static(__dirname+'/public/js'));
app.use('/fonts', express.static(__dirname+'/public/fonts'));
app.use('/vendor', express.static(__dirname+'/public/vendor'));
app.use('/favicon.ico', express.static(__dirname+'/public/favicon.ico'));

app.get('/', (req, res) => {
    let templateData = {username: "Maximillian"};
    res.render('index', templateData);
});

app.listen(config.port, () => console.log(`Gravity Demo Site listening on port ${config.port}!`))
