var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
app = express();
var port = 3000;
var database = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/',function(req,res){
  res.render("main");
});

app.post('/',function(req,res){
  database.push(req.body);
  console.log("PUSHED",database);
  res.json({message: "SUCCESS",data: database});
});

app.listen(port,function(){
  console.log("Listening on port",port);
});
