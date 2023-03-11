import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css']
})
export class DeleteAlbumComponent {
  constructor(private route: ActivatedRoute, private service: MusicServiceService){}
  @Input() album: any;
  deleted: Album[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.deleteAlbum(this.album.id, (album: Album[])=>
      {
        this.deleted = album;
      });
    });
  }
}
