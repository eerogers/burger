var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var morgan = require('morgan')
var expresshbs = require('express-handlebars')
var path = require('path')

app.use(morgan('dev'))
app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname + '/public')));
console.log("working")
orm = require('./config/orm.js')
var router = require('./controllers/burgers_controller.js')
app.use(router)
//should be app.get and res.render or something
var thisthing = { 
    thing: "thisISRIGHT"
}
app.get("/", function(req, res) {
    res.render('index')
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});