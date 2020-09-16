import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http:HttpClient) { }
  //Rest API url
  url="http://localhost:8080/api/products";

  getListOfProducts(){
      return this.http.get(this.url);
  }

  addProduct(productData:Product):any{
    console.log(JSON.stringify(productData));
    return this.http.post(this.url,JSON.stringify(productData),this.httpOptions);
  };

  updateProduct(id:number,productData){
    let updateUrl=this.url+"/"+id;
    console.log(updateUrl);
    console.log(productData);
    return this.http.put(updateUrl,productData,this.httpOptions);
  }

  deleteProduct(id:number){
    let deleteUrl=this.url+"/"+id;
    console.log(deleteUrl);
    return this.http.delete(deleteUrl,{responseType: 'text'});
  }



}
