var express=require("express");
var app=express();

var bodyparser=require('body-parser');
app.use(bodyparser());
app.get('/login',function(req,res){
    res.send("hello server")
})

app.listen(3000,function(){
    console.log(" holisol server")
});