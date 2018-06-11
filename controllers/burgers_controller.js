var Burgers = require("../models/burger.js")
var express = require('express');
var app = express()
var eaten = {}
console.log(Burgers)
//routes go in here
//THE ROUTER HAS TO BE THE PROBLEM
var router = express.Router()
router.post('/burgers', function(req, res) {
  //  console.log(req.body)
    Burgers.createBurger({
        burger_name: req.body.burger,
        devoured: false
    })
})
//router.get('/burgers/uneaten', function(req, res) {    
//    var newBurger = Burgers.specificBurger("devoured", false)
//    console.log("data equals", newBurger) //<-- this is undefined
//    res.send({"uneatenBurger": newBurger})
//});
   // res.render('index', {burger: burger})
//router.get('/burgers/eaten', function(req, res) {
//    var thisthing = { 
//        thing: "thisISRIGHT"
//    }  
   // app.get("/", function(req, res) {
//    var eatenBurger = Burgers.specificBurger("devoured", true)
//    res.send({"eatenBurger": thisthing})
   // });
  //  res.render('index', {eatenBurger: eatenBurger})
///});

router.post('/burgers/update', function(req, res) { 
    console.log(req.body)   
    Burgers.updateBurger("burgers", "devoured", true, "id", req.body.id)
 //   res.render('index', {burger: burger})
});

module.exports = router