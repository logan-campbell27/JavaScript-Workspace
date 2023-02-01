const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
//import data from './data/data.json'
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('this is not the default root Route');
})
app.get('/users', function(req, res){
    var data = fs.readFileSync('./data/data.json');
    var myObject= JSON.parse(data);
    return res.json(myObject)
})
app.get('/users/:id',function(req,res){
    var data = fs.readFileSync('./data/data.json');
    var myObject= JSON.parse(data);
    var userId = Number(req.params.id -1)
    console.log("Request received")
    console.log(myObject[userId])
    return res.json(myObject[userId])
})
app.post('/users', function(req,res){
    var data = fs.readFileSync('./data/data.json');
    var myObject= JSON.parse(data);
    var idtest = Number(req.id)
    console.log(idtest)
    let newData = {
        "id": Number(req.body.id),
        "first_name": String(req.body.first_name),
        "last_name": String(req.body.last_name),
        "email": String(req.body.email),
        "gender": String(req.body.gender),
        "ip_address":String(req.body.ip_address)
    };
    myObject.push(newData)
        var myData = JSON.stringify(myObject);
        fs.writeFile('data/data.json', myData, err =>{
            if(err) throw err;

            console.log("New Data added");
            console.log(newData);
        })
    return res.status(200).json({error: "New User Added", location: "/users"})

})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}!`)
});
// CORS Middleware
app.use(function(req,res,next){
    // Enabling CORS
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, x-client-keyBy, x-client-token,x-client-secret,Authorization");
    next();
})