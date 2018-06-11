var connection = require('./connection.js');
var express = require("express");
var app = express()
var uneaten = []
var orm = {
//look at your orm notes and watch end of video
    create: function (value) {
        var q = `INSERT INTO burgers
        SET burger_name = ?, devoured = ?`
        console.log(q)
        var value1 = value.burger_name
        var value2 = value.devoured
        connection.query(q, [value1, value2], function(error, results, fields){
            if (error) throw error;
            console.log(results);
        });
    },
    selectWhere: function (colName, value, cb) {
        connection.query('SELECT * FROM burgers WHERE ?? =?', [colName, value], function (e, r) {
            if (e) throw e
          //  uneaten.push(results)
            console.log(r) //this is where the results are seemingly stuck
            cb(r) //have added this based on 1:00:04
            //talks about importance of at about 1:09:00
        })
    },
    updateWhere: function (tabName, colName, value, colCheck, valueCheck) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tabName, colName, value, colCheck, valueCheck], function (e, r) {
            if (e) throw e
            console.log(r)
          })
    },
    deleteWhere: function (tabName, colName, value) {
        connection.query('SELECT * FROM ?? WHERE ?? =?', [tabName, colName, value], function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    }
};

module.exports = orm