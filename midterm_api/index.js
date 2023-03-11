const {Operation} = require('./lib/app/models/Operation')
const {OperationDAO} = require('./lib/app/database/OperationDAO')
const express = require('express')
const app = express()
const port = 5000

var bodyParser = require('body-parser')

app.use(bodyParser.json())


app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))


app.get('/version', function(req, res){
    res.json("My Calculator Services v1.0")
});






app.post('/operation', function(req,res){
    console.log('creating new function request');
    console.log(JSON.parse(req.body.num1));
    console.log(req.body.num1);
    console.log(req.body.num2);
    console.log(req.body.operand);
    var operation = new Operation(JSON.parse(req.body.num1), req.body.num2, req.body.operand);
    console.log(operation);
    let dao = new OperationDAO();
    dao.create(operation, function(operation){
        res.json(operation);
        console.log('operation created');
    });
})

