import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';
@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent {

  constructor(private route: ActivatedRoute, private service: MusicServiceService){
   }

  @Input() a: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.createAlbum(this.a, (album:Album[])=>
      {
        this.a=album;
      });
    });
  }
}
