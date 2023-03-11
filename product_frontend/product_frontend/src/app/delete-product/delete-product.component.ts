import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/operation-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  constructor(private route: ActivatedRoute, private service: ProductServiceService){}
  @Input() product: any;
  deleted: Product[] = [];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.deleteProduct(this.product.id, (product: Product[])=>
      {
        this.deleted = product;
      });
    });
  }
}
