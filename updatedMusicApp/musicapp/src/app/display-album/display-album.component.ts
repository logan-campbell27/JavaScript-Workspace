import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent {
  @Input() album: any;
  constructor(private route: ActivatedRoute, private service: MusicServiceService){}
  a: Album[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.getAlbum(this.album.id, (album: Album[])=>
      {
        this.a = album;
      });
    });
  }
}
