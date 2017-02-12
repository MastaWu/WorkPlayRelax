// server.js
// To start the server, just type "node server.js" in the commandline
// then direct your web browser to http://localhost:<port>
// Note: replace port with the port you've specified below

// Express is a nodejs web application framework that 
// provides a robust set of eatures for web and mobile applications
var express          = require('express');
// Instantiating express
var app              = express();
// Parses incoming request boddies in a middleware before your handlers
var bodyParser       = require('body-parser');
// HTTP request logger middleware
var morgan           = require('morgan');
// Port to point your web browser
var port             = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

// Add code after this line:





// Example of how to create your first link
// This is saying, that when your browser sends a request to the server at '/'
// for data, then send 'Hello World' back to the browser
app.get('/', function (req, res) {
    // in the response, we want to send the words 'Hello World!'
    res.send('Hello World!');
});


app.get('/whatever', function (req, res) {
    // in the response, we want to send the words 'Hello World!'

    for(var x = 0; x < 10; x++){
        console.log(x);
    }
    // res = respond
    res.send("Check your logging.");
});

// GET request
// This returns a list of items
app.get('/list', function (req, res) {

    var object = {
        "item1" : "water",
        "item2" : "food",
        "item3" : "candy",
        "item4" : "snacks"
    };
    // Responding with a json object
    res.json(object);

});


// GET request
// This returns a list of items
app.post('/postList', function (req, res) {
    var object = {
        item1 : "water",
        item2 : "food",
        item3 : "candy",
        item4 : "snacks"
    };

    console.log(JSON.stringify(object));

    console.log(req.body.item);
    object["item5"] = req.body.item;

    console.log(JSON.stringify(object));

    res.json({"msg": "Successful!", "New Object" : object});

});


// Add code before this line;

app.listen(port);
console.log('Server has started at port: ' + port + ' \nDate: ' + new Date());

module.exports = app;
