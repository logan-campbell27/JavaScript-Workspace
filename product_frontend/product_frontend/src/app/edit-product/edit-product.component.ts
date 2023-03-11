import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/operation-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  constructor(private route: ActivatedRoute, private service: ProductServiceService){}
  @Input() product: any;
  edited: Product[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.editProduct(this.product.id, (product:Product[])=>
      {
          this.edited = product;
      })
    })

  }
}
