export class Track{
    private id: number = -1;
    private title: string = "";
    private number: number = -1;
    private lyrics: string = ""; 

    constructor(id:number, title: string, number: number, lyrics: string){
        this.id = id;
        this.title = title;
        this.number = number;
        this.lyrics = lyrics;
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
    get Number():number{
        return this.number;
    }

    set Number(number:number){
        this.number = number;
    }
    get Lyrics():string{
        return this.lyrics;
    }

    set Lyrics(lyrics:string){
        this.lyrics = lyrics;
    }
}