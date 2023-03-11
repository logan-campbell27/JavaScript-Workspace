import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/operation-service.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {
  constructor(private route: ActivatedRoute, private service: ProductServiceService){}
  @Input() product: any;
  p: Product[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.getAlbum(this.product.id, (product: Product[])=>
      {
        this.p = product;
      });
    });
  }
}
