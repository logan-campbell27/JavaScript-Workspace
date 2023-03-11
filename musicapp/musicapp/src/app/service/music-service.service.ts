import { Injectable } from '@angular/core';
import exampledata from '../data/sample-music-data.json'
import{Artist} from '../models/Artist';
import{Album} from '../models/Album';
import{Track} from '../models/Track';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {


  artists: Artist[]=[];
  albums: Album[]=[];


  constructor() {
    this.artists.push(new Artist(0, "The Beatles"));
    for(let x = 0; x<exampledata.length; ++x){
      if(exampledata[x].artist == "The Beatles"){
        let tracks: Track[] = [];
        for(let y = 0; y <exampledata[x].tracks.length; ++y){
          tracks.push(new Track(exampledata[x].tracks[y].id, exampledata[x].tracks[y].title, exampledata[x].tracks[y].number,exampledata[x].tracks[y].lyrics));
        }
        this.albums.push(new Album(exampledata[x].id, exampledata[x].title,exampledata[x].description, exampledata[x].artist, exampledata[x].year, tracks));
      }
    }
  }

  getArtists(): Artist[]{
    return this.artists;
  }
  getAlbums(artist:string):Album[]{
    return this.albums;
  }
  getAlbum(a:string, id:number):Album{
    for(let x=0; x<this.artists.length; ++x){
      if(this.artists[x].Name == a){
        for(let y=0; y<this.artists[x].Albums.length; ++y){
          if(this.artists[x].Albums[x].Id == id){
            return this.artists[x].Albums[x];
          }
        }
      }
    }
    let album = new Album(0,"","","",0,[]);
    return album;
  }
  createAlbum(album:Album):Number{
    this.albums.push(album);
      return 1;

  }
  editAlbum(a: Album):Number{
    for(let x=0; x<this.albums.length; ++x){
      if(this.albums[x] == a){
        this.albums[x] == a;
        return 1;
      }
      }
      return -1;
    }

  deleteAlbum(id:number):Number{
    for(let x=0; x<this.albums.length; ++x){
      if(this.albums[x].Id == id){
        this.albums.splice(x,1);
        return 1;
      }
    }
  return -1;
  }
}
