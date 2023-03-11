
export class Operation{
    private num1: number | null;
    private num2: number | null;
    private operand: string | null;


    constructor(num1:number|null, num2:number|null, operand:string|null){
        this.num1 = num1;
        this.num2 = num2;
        this.operand = operand;
    }

    get Num1():number | null{
        return this.num1;
    }

    set Num1(num1:number|null){
        this.num1 = num1;
    }

    get Num2():number|null{
        return this.num2;
    }
    set Num2(num2:number|null){
        this.num2 = num2;
    }
    get Operand():string|null{
        return this.operand;
    }
    set Operand(operand:string|null){
        this.operand = operand;
    }



}
