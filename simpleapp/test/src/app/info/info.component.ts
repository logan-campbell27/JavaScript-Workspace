import { Component,OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{

  quantity = 0;
  products = ["episode 1","episode 2","episode 3"];
  selectedProduct = "";

  @Input() name: string | undefined;

  onSubmit(){
    console.log(this.quantity);
    console.log(this.selectedProduct);
  }
  newInfo(){
    this.quantity=0;
    this.selectedProduct="";
  }
}
