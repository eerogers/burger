var orm = require("../config/orm.js");
var burgers = {
  allBurgers: function () {
    orm.selectAll('burgers', function(r) {
      return r
    })
  },
  specificBurger: function (colName, value) {
    orm.selectWhere(colName, value, function(r) {
      return r
    })
  },
  createBurger: function (value) {
  //  console.log(value)
    orm.create(value, function(r) {
      return r
    })
  }
}
module.exports = burgers