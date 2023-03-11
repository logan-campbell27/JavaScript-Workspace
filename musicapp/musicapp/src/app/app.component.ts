import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MusicServiceService } from './service/music-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(private router: Router){}
  displayArtistList() {
console.log("Artist button clicked");
this.router.navigate(['list-artists'],{queryParams:{data: new Date()}});
}

  title = 'My Music Collection';
  version = 1.0;

  displayVersion(){
    return this.version;
  }

}
