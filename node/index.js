var express = require('express');
var morgan = require('morgan');
var path = require('path');
var index = require('./routes/index');

var app = express();
var passport = require('passport');
var jwt = require('jwt-simple');
var bodyParser = require('body-parser');
var compression = require('compression');

var port = process.env.PORT || 80;

app.use(morgan('combined'));
app.use(express.static('public'));
app.set('json spaces', 4);

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(compression());
app.use(passport.initialize());
//require('./config/passport')(passport);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/', index);

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

module.exports = app;