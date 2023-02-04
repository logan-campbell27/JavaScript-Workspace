const {ProductDAO} = require('./lib/app/database/ProductDAO')
const {Product} = require('./lib/app/models/Product')
const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

app.use(bodyParser.json())

const dbHost = "localhost"
const dbPort = 3306;
const dbUsername = "root"
const dbPassword = "root"
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))


app.get('/products', function(req, res){
    console.log('In GET /products route');
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAllProducts(function(products){
        res.json(products);
    });
});

app.get('/productsid/:id', function(req, res){
    console.log('In GET /products/productid route');
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findProduct(req.params.id,function(products){
        
        res.json(products);
    });
});




app.post('/newproduct', function(req,res){
    console.log('creating new product');
    console.log(JSON.parse(req.body.id));
    console.log(req.body.name);
    console.log(req.body.desc);
    console.log(req.body.price);
    console.log(req.body.quantity);
    var product = new Product(JSON.parse(req.body.id), req.body.name, req.body.desc, req.body.price, req.body.quantity);
    console.log(product);
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.create(product, function(product){
        res.json(product);
        console.log('Product created');
    });
})
app.put('/editproduct',function(req,res){
    console.log('updating product');
    var product = new Product(JSON.parse(req.body.id), req.body.name, req.body.desc, req.body.price, req.body.quantity);
    console.log(product);
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.update(product, function(response){
        res.json(response);
        console.log('updated');
    });
})
app.delete('/deleteproduct/:productId',function(req,res){
    console.log('deleting product');
    let dao = new ProductDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.delete(req.params.productId, function(rowsChanged){
        res.json(rowsChanged);
        console.log('deleted');
    })
})
