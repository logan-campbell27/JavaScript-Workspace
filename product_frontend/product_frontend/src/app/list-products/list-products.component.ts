import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/operation-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  constructor(private route: ActivatedRoute, private service: ProductServiceService){}

  p: Product = new Product(-1,"","",0.0,0);

  selectedProduct: Product = this.p;
  products: Product[]=[];
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.getProducts((product:Product[])=>
      {
        this.products=product;
        this.selectedProduct = this.p;

      })
    })
  }
  public onSelectArtist(product:Product){
    this.selectedProduct=product;
  }
}
