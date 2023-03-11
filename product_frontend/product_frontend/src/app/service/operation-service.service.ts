import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[]=[];
  hostname: string = "3000";

  constructor(private http: HttpClient) { }

  public getProducts(callback:any){
    this.http.get<Product[]>(this.hostname+"/view").subscribe((data)=>
    {
      let products:Product[] = [];
      for(let x=0; x<data.length; ++x){
        products.push(new Product(data[x]['Id'], data[x]['Name'], data[x]['Desc'], data[x]['Price'], data[x]['Quantity']));
      }
      callback(products);
    });
  }

  getAlbum(id:number, callback:any){
    this.http.get<Product[]>(this.hostname+"/details/"+id).subscribe((data)=>
    {
      let product:Product[]=[];
      for(let x=0; x<data.length;++x){
        if(x==id){
          product.push(new Product(data[x]['Id'], data[x]['Name'], data[x]['Desc'], data[x]['Price'], data[x]['Quantity']));
        }
      }
      callback(product);
    });

  }

  createProduct(product:Product, callback:any){
    this.http.post<Product>(this.hostname+"/create",product).subscribe((data)=>
    {
      callback(data);
    })
  }
  editProduct(product:Product, callback:any){
    this.http.put<Product>(this.hostname+"/edit/"+product.Id, Product).subscribe((data)=>
    {
      callback(data);
    })
  }

  deleteProduct(id:number, callback:any){
    this.http.delete(this.hostname+"/delete/"+id).subscribe((data)=>
    {
      callback(data);
    })
  }
}
