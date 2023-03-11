import { Injectable } from '@angular/core';
import exampledata from '../data/sample-music-data.json'
import{Artist} from '../models/Artist';
import{Album} from '../models/Album';
import{Track} from '../models/Track';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {


  artists: Artist[]=[];
  albums: Album[]=[];
  hostname: string = "3000";
  constructor(private http: HttpClient) {

  }

  public getArtists(callback:any){
    this.http.get<Artist[]>("3000/artists").subscribe((data)=>
    {
      let artists:Artist[] = [];
      for(let x=0; x<data.length; ++x){
        artists.push(new Artist(data[x]['id'],data[x]['name']));
      }
      callback(artists);
    });
  }

  getAlbums(artist:string, callback:any){
    this.http.get<Album[]>(this.hostname+"/allalbums").subscribe((data)=>
    {
      let albums:Album[] = [];
      for(let x=0; x<data.length;++x){
        let tracks:Track[]=[];
        for(let y=0; y<data[x]['tracks'].length;++y){
          tracks.push(new Track(data[x]['tracks'][y]['id'], data[x]['tracks'][y]['title']
                                ,data[x]['tracks'][y]['number']
                                ,data[x]['tracks'][y]['lyrics']));
        }
        albums.push(new Album(data[x]['id'], data[x]['title'],
                              data[x]['description'], data[x]['artist'],
                              data[x]['year'],tracks))
      }
      callback(albums);
    });
  }
  getAlbum(id:number, callback:any){
    this.http.get<Album[]>(this.hostname+"/albumsid/"+id).subscribe((data)=>
    {
      let albums:Album[]=[];
      for(let x=0; x<data.length;++x){
        let tracks: Track[] =[];
        for(let y=0; y<data[x]['tracks'].length;++y){
          tracks.push(new Track(data[x]['tracks'][y]['id'], data[x]['tracks'][y]['title']
                                ,data[x]['tracks'][y]['number']
                                ,data[x]['tracks'][y]['lyrics']));
        }
        albums.push(new Album(data[x]['id'], data[x]['title'],
                              data[x]['description'], data[x]['artist'],
                              data[x]['year'],tracks))
      }
      callback(albums);
    });

  }

  createAlbum(album:Album, callback:any){
    this.http.post<Album>(this.hostname+"/newalbum",album).subscribe((data)=>
    {
      callback(data);
    })
  }
  editAlbum(album:Album, callback:any){
    this.http.put<Album>(this.hostname+"/editalbum/"+album.Id, album).subscribe((data)=>
    {
      callback(data);
    })
  }

  deleteAlbum(id:number, callback:any){
    this.http.delete(this.hostname+"/deletealbum/"+id).subscribe((data)=>
    {
      callback(data);
    })

  }
}
