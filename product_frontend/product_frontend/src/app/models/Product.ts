
export class Product{
    private id: number = -1;
    private name: string = "";
    private desc: string = "";
    private price: number = -1;
    private quantity: number = -1;

    constructor(id:number, name:string, desc:string, price:number, quantity:number){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.quantity = quantity;
    }

    get Id():number{
        return this.id;
    }

    set Id(id:number){
        this.id = id;
    }

    get Name():string{
        return this.name;
    }
    set Name(name:string){
        this.name = name;
    }
    get Desc():string{
        return this.desc;
    }
    set Desc(desc:string){
        this.desc = desc;
    }
    get Price():number{
        return this.price;
    }
    set Price(price:number){
        this.price = price;
    }
     get Quantity():number{
        return this.quantity;
    }
    set Quantity(quantity:number){
        this.quantity = quantity;
    }


}
