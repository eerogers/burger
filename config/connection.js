var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'uyexy8ia4ukmm6ot',
  password : 'lsnt6mwgyqxzacoe',
  database : 'u9mk6xdp7zu45v86',
  port: '3306'
});
 
module.exports = connection