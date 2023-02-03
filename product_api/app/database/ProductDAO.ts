
import { Product } from "../models/Product";

import * as mysql from "mysql";

import * as util from "util";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class ProductDAO{
    private host: string = "";
    private port: number = -1;
    private username: string = "";
    private password: string = "";
    private pool;
    constructor(host:string, port: number, username:string, password:string){
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;

        this.pool = mysql.createPool({
            host: this.host,
            port: this.port,
            user: this.username,
            password: this.password,
            database: 'product_api_data'
        });
        module.exports = this.pool;

        /*this.connection = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            port: this.port,
            database: "music_api_data"
        });*/

    }

    public findAllProducts(callback: any){

         let products:Product[] = [];

         
            this.pool.getConnection(function(err: any, connection: any){
            if (err) throw err
            
            connection.query('SELECT * FROM PRODUCTS', function(err:any, rows:any, fields:any){
                connection.release();

                if(err) throw err
                for(let x=0; x<rows.length; ++x){
                    products.push(new Product(x, rows[x].name, rows[x].description, rows[x].price, rows[x].quantity));
                }

                callback(products);
            });
         });

    }
    public findProduct(productid:number, callback: any){

        let products:Product[] = [];
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('SELECT * FROM PRODUCTS WHERE ID=?', [productid])
                for(let x=0; x<result.length; ++x){
                    products.push(new Product(result[x].id, result[x].name, result[x].description, result[x].price, result[x].quantity));
                }
            ;
        
           
            callback(products);
        });


    }
    
   
    
    public create(product:Product, callback: any){

        this.pool.getConnection(async function(err: any, connection: any){
                 //connection.release();
                 if(err) throw err
                 connection.query = util.promisify(connection.query);
                 let p = new Product(product.Id, product.Name, product.Desc, product.Price, product.Quantity);
                 let result = await connection.query('INSERT INTO `Products` (`id`, `name`, `description`, `price`, `quantity`) VALUES (?,?,?,?,?)',[p.Id, p.Name, p.Desc, p.Price, p.Quantity]);
                 if(result.affectedRows != 1){
                    callback(-1)
                 }

                 callback(result);
                });

    }
    public update(product:Product, callback: any){

        this.pool.getConnection(async function(err: any, connection: any){
            //connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('UPDATE PRODUCTS SET `name`=?, `description`=?, `price`=?, `quantity`=? WHERE ID=?',[product.Name,product.Desc,product.Price,product.Quantity,product.Id]);
            if(result.affectedRows !=  1){
                callback(-1)
            }
            callback(result);

        });
    }
    public delete(productId:number, callback: any){
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('DELETE FROM PRODUCT WHERE ID=?',[productId]);
            callback(result);
        });
    }
}

