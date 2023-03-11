import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent {

  constructor(private route: ActivatedRoute, private service: MusicServiceService){}

  @Input() album: any;
  edited: Album[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.editAlbum(this.album.id, (album:Album[])=>
      {
          this.edited = album;
      })
    })

  }
}
