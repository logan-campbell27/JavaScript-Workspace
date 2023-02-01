import { Track } from './Track';
export class Album{
    private id: number = -1;
    private title: string = "";
    private artist: string = "";
    private description: string = "";
    private year: number = -1;
    private tracks: Track[] = []; 

    constructor(id: number, title: string, description: string, year: number, tracks: Track[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.year = year;
        this.tracks = tracks;
    }
    
    get Id():number{
        return this.id;
    }

    set Id(id:number){
        this.id = id;
    }

    get Title():string{
        return this.title;
    }

    set Title(title:string){
        this.title = title;
    }
    
    get Description():string{
        return this.description;
    }

    set Description(description:string){
        this.description = description;
    }

    get Year():number{
        return this.year;
    }

    set Year(year:number){
        this.year = year;
    }

    get Tracks():Track[]{
        return this.tracks;
    }

    set Tracks(tracks:Track[]){
        this.tracks = tracks;
    }
}