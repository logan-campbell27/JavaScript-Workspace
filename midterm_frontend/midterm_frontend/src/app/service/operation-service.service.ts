import { Injectable } from '@angular/core';
import { Operation } from '../models/Operation';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationServiceService {
  hostname: string = "5000";

  constructor(private http: HttpClient) { }


  createOperation(operation:Operation, callback:any){
    this.http.post(this.hostname+"/operation",operation).subscribe((data)=>
    {
      callback(data);
    })
  }
}
