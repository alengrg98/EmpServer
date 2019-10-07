const exp = require('express');
const app = exp();
 
const path = require('path');
//var bodyparser = require('body-parser');

var loginrouter = require('./routes/login');
var employeerouter = require('./routes/employees')

var mongo = require('mongoose');
var url = "mongodb+srv://admin:REhimalayan123@cluster1-as5bb.mongodb.net/empdb?retryWrites=true&w=majority";

mongo.connect(url, {useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    else console.log("Database connected");
})
//app.use(bodyparser.urlencoded({extended:true}));

app.use(exp.static(path.join(__dirname+"/public")));    //sending static files

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use("/login", loginrouter);
app.use("/emp", employeerouter);


app.listen(process.env.PORT || 8080,()=>{
    console.log("Listening");
})