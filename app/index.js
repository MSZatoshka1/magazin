const app = require('../app');
const pool = require('../bd');
const func = require('../func/func');
var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");
const form = require('../func/form/elem.js');

  app.get('/',(req, res) => {
    res.render("index"); 
  });
  app.get('/registration',(req, res) => {
    res.render("registration");
});
app.post('/registration',(req, res) => {
  sha256.update(req.body.password,"utf8");
  var password = sha256.digest("base64");
  var kyki = crypto.randomBytes(20).toString('hex');
  let users = {
    "surname": req.body.surname,
    "name": req.body.name,
    "login": req.body.login,
    "email":req.body.email,
    "password":password,
    "kyki" : kyki
  }

 pool.query(`INSERT INTO man SET ?`,users, function (error, results, fields){
    if (error) throw error;
    
    return;
   });
  res.render("registration"); 
});


 
module.exports = app;