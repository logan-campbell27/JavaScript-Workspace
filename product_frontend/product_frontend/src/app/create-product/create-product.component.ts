import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/operation-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private route: ActivatedRoute, private service: ProductServiceService){}
  @Input() product: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.createProduct(this.product, (product:Product[])=>
      {
        this.product=product;
      });
    });
  }
}
