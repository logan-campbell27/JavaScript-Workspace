
export class Operation{
    private num1: number = -1;
    private num2: number =  -1;
    private operand: string = "";
    

    constructor(num1:number, num2:number, operand:string,){
        this.num1 = num1;
        this.num2 = num2;
        this.operand = operand;
    }

    get Num1():number{
        return this.num1;
    }

    set Num1(num1:number){
        this.num1 = num1;
    }

    get Num2():number{
        return this.num2;
    }
    set Num2(num2:number){
        this.num2 = num2;
    }
    get Operand():string{
        return this.operand;
    }
    set Operand(operand:string){
        this.operand = operand;
    } 
    
    
    
}