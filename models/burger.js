var orm = require("../config/orm.js");
console.log(orm)
var burgers = {
 // allBurgers: function () {
 //   orm.selectAll('burgers', function(r) {
 //     return r
 //   })
 // },
  specificBurger: function (colName, value) {
    orm.selectWhere(colName, value, function(r) {
      return r
      console.log("here "+ r)
  });
  },
  createBurger: function (value) {
  //  console.log(value)
    orm.create(value, function(r) {
      return r
    })
  },
  updateBurger: function (tabName, colName, value, colCheck, valueCheck) {
    orm.updateWhere(tabName, colName, value, colCheck, valueCheck, function(r) {
      return r
    })
  }
}
module.exports = burgers