var express = require("express");
var app = express()
var Burger = require("../models/burger.js")
var eaten = {}
//routes go in here
var router = express.Router()

router.post('/burgers', function(req, res) {
  //  console.log(req.body)
    Burger.createBurger({
        burger_name: req.body.burger,
        devoured: false
    })
})
router.get('/burgers/uneaten', function(req, res) {    
    var uneatenBurger = Burger.specificBurger("devoured", false)
    console.log("data equals", uneatenBurger) //<-- this is undefined
    res.render('index', {uneatenBurger: uneatenBurger})
})
   // res.render('index', {burger: burger})
router.get('/burgers/eaten', function(req, res) {
    var thisthing = { 
        thing: "thisISRIGHT"
    }  
   // app.get("/", function(req, res) {
    res.render('index', thisthing)
   // });
    var eatenBurger = Burger.specificBurger("devoured", true)
  //  res.render('index', {eatenBurger: eatenBurger})
});

router.get('/burgers/:tab/:col', function(req, res) {    
    var burger = Burger.allBurgers()
 //   res.render('index', {burger: burger})
});

module.exports = router