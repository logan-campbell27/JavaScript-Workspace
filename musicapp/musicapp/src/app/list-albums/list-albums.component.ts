import { Component, Input } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';


@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
@Input() albums: Album[] | undefined | null;
onSelectAlbum(album: Album) {
this.selectedAlbum = album;
}
selectedAlbum: any;

  constructor(private service: MusicServiceService){}


}
