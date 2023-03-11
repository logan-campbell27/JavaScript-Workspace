import { Component, Input } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
@Input() albums: Album[] | undefined | null;
@Input() artist: any;

onSelectAlbum(album: Album) {
this.selectedAlbum = album;
}
selectedAlbum: any;
constructor(private route: ActivatedRoute, private service: MusicServiceService){}

ngOnInit(){

    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.getAlbums(this.artist.name, (album:Album[])=>
      {
        this.albums=album;
        this.selectedAlbum = this.selectedAlbum;

      })
    })
  }


}
