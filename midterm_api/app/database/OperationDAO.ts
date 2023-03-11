
import { Operation } from "../models/Operation";

import * as mysql from "mysql";

import * as util from "util";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class OperationDAO{
   
    constructor(){}

        /*this.connection = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            port: this.port,
            database: "music_api_data"
        });*/

    
    
    public create(operation:Operation, callback: any){

        if(operation.Operand == "+"){
            callback(operation.Num1+operation.Num2);
        }
        if(operation.Operand == "-"){
            callback(operation.Num1-operation.Num2);
        }
        if(operation.Operand == "/"){
            callback(operation.Num1/operation.Num2);
        }
        if(operation.Operand == "*"){
            callback(operation.Num1*operation.Num2);
        }
        callback(-1);        

    }
}

