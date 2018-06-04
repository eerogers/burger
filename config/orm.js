var connection = require('./connection.js');
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
        connection.query('SELECT * FROM burgers WHERE ?? =?', [colName, value], function (error, results, fields) {
            if (error) throw error;
            cb(results)
            console.log(results); //this is where the results are seemingly stuck
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