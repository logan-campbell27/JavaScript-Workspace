import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent {
  constructor(private route: ActivatedRoute, private service: MusicServiceService){}

  a: Artist = new Artist(0,"");

  selectedArtist: Artist = this.a;
  artists: Artist[]=[];

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.artists = this.service.getArtists();
      this.selectedArtist = this.a;
    })
  }
  public onSelectArtist(artist:Artist){
    this.selectedArtist=artist;
  }

}
