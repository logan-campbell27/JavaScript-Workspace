import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  question = "What's your name?";
  answer = "unknown";

  appForm = new FormGroup({
    answer: new FormControl(''),
  });

  onSubmit(data: Partial<{ answer: string | null | undefined; }>){
    this.answer = (data as string);
    console.log("Your name is "+data);
  }


}
