var express = require("express");
var Burger = require("../models/burger.js")
var eaten = {}
//routes go in here
var router = express.Router()

router.post("/burgers", function(req, res) {
  //  console.log(req.body)
    Burger.createBurger({
        burger_name: req.body.burger,
        devoured: false
    })
})
router.get("/burgers/uneaten", function(req, res) {    
    eaten = Burger.specificBurger("devoured", false)
  //  res.render('index', {burger: burger})
});
router.get("/burgers/eaten", function(req, res) {    
    Burger.specificBurger("devoured", true)
  //  res.render('index', {burger: burger})
});

router.get("/burgers/:tab/:col", function(req, res) {    
    var burger = Burger.allBurgers()
    res.render('index', {burger: burger})
});

module.exports = router