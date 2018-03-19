var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');

var app = express();
app.set('port', process.env.PORT || 3000);

// Set Static Folder (Angular)
app.use(express.static(path.join(__dirname, 'client/build')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// React App
app.get('*', function(req, res, next) {  
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

app.listen(app.get('port'), function() {
    console.log(`Server started`);
});