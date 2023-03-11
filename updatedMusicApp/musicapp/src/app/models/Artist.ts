import { Album } from "./Album";
export class Artist{
     id: number = -1;
     name: string = "";
     albums: Album[] = [];

    constructor(id:number, name:string){
      this.id = id;
     this.name = name;
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

    get Albums():Album[]{
        return this.albums;
    }
    set Albums(albums:Album[]){
        this.albums = albums;
    }
}