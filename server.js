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


// POST request
// This returns a list of items
app.post('/postList', function (req, res) {
    var object = {
        item1 : "water",
        item2 : "food",
        item3 : "candy",
        item4 : "snacks"
    };

    var object2 = ["item1", "item2"];

    console.log(JSON.stringify(object));
    console.log("\nArray: " + object2);

    console.log("\nItem from request: " + req.body.item);
    object["item5"] = req.body.item;
    object2.push(req.body.item);
    console.log("\n" + JSON.stringify(object));
    console.log("Array after item: " + object2);
    res.json({"msg": "Successful!", "New Object" : object});
});

// Post request
// This receives data from the client, and adds it to the object. The object is not persisted, because it is not
// connected to a database.
app.post('/postList2', function(req, res) {
    // This is an object.
    // A variable holds the information. It needs to be declared. Remember to use the var keyword when initially
    // declaring variable.
    // Valid variable
    // ex. var a;lskdjfa;sld;
    //
    // Not valid variable:
    // ex. a;lsdkjfla;kjsdf

    // This is an object. It stores data in key: value pairs.
    // Ex. Each person has a shopping cart.
    // Each person's shopping cart has it's own items
    // Ai Yen : banana, apple, grapes.
    // Carmen : sausages, eggs, yogurt
    // Actual object:
    // var shoppingCart = {
    //   "ai yen" : [ "banana", "apple", "grapes" ],
    //   "carmen" : [ "sausages", "eggs", "yogurt" ]
    // }
    //
    // Another variable example:
    // Single Item
    // var name = "Stephen";
    // var age = 20;
    // Array of items
    // var roommates = [ "Stephen", "Ai Yen", "Carmen", "Dario"];

    // Object containing items
    var list = {
        item1 : "banana",
        item2 : "apple",
        item3 : "grapes"
    };

    // This prints out the original list to the log. JSON.stringify lets me print out what's inside the list.
    console.log("Original List: " + JSON.stringify(list));

    // Processing the request
    console.log("\nNow processing the request");

    // This is adding the item from the request to the object.
    list.item4 = req.body.item;

    // This prints out the new list in the log
    console.log("\nAfter POST call List: " + JSON.stringify(list));

    // This is just sending a message to the client, that the request has been processed.
    res.json({"msg": "Message received!"});
});

// Add code before this line;

app.listen(port);
console.log('Server has started at port: ' + port + ' \nDate: ' + new Date());

module.exports = app;
