var express = require("express");
var bodyParser = require("body-parser");
var path = require('path')
var morgan = require('morgan')
var expresshbs = require('express-handlebars')

var app = express();
var helpers = {
    test: function (){
        return 1+1
    }
}
//can call "test" in handlebars then to return the answer to the function
var PORT = process.env.PORT || 8080;
app.use(morgan('dev'))

app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs', helpers: helpers}))
app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname + '/public')));
console.log("working")


orm = require('./config/orm.js')
orm.selectWhere("devoured", true, function(r) {
   // return r
console.log(r)
   // just do an automatic res.json in here if you can't get the damn thing working
});


var router = require('./controllers/burgers_controller.js')
app.use(router)
//should be app.get and res.render or something
var thisthing = { 
    thing: "thisISRIGHT"
}
app.get("/", function(req, res) {
    res.render('index')
})
app.get("/burgers/eaten", function(req,res) {
    orm.selectWhere("devoured", true, function(r) {
        // return r
     console.log(r)
     res.send(r)
        // just do an automatic res.json in here if you can't get the damn thing working
     })
})

app.get("/burgers/uneaten", function(req,res) {
    orm.selectWhere("devoured", false, function(r) {
        // return r
     console.log("here" + r)
     res.send(r)
        // just do an automatic res.json in here if you can't get the damn thing working
     })
})
//orm.selectWhere("devoured", true, function(r) {
    // return r
// console.log(r)
    // just do an automatic res.json in here if you can't get the damn thing working
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});