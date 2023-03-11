import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){
    this.router.navigate(['list-products'],{queryParams:{data: new Date()}});
  }

  title = 'Product Store';
  version=1.0;
  displayVersion(){
    return this.version;
  }
}

