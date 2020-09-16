import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { LoginRegistrationService } from './login-registration.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  


  constructor(private http:HttpClient,private login:LoginRegistrationService) { }
  //REST api url
  url="http://localhost:8080/api/orders";
  userOrderUrl="http://localhost:8080/api/orders/user/";

  getListOfOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }

  getListOfUserOrders(){
    let mail:string=sessionStorage.getItem("id");
    console.log(mail);
    console.log(this.userOrderUrl+mail);
    return this.http.get(this.userOrderUrl+mail);
  }
  getOrderById(oid){
    return this.http.get(this.url+"/"+oid);
  }

  createOrder(orderData){
    return this.http.post(this.url,orderData);
  }

  getStatus(oid:number){
    let statusUrl=this.url+"/status/"+oid;
    console.log(statusUrl);
    return this.http.get(statusUrl);
  }

  updateStatus(status,oid){
    let statusUrl=this.url+"/status/"+oid;
    return this.http.put(statusUrl,status);
  }

  updateOrder({ id, orderData }: { id: number; orderData: any; }){
    let updateUrl=this.url+"/"+id;
    return this.http.put(updateUrl,orderData,this.httpOptions);
  }

  cancelOrder(id:number){
    let deleteUrl=this.url+"/"+id;
    return this.http.delete(deleteUrl,{ responseType: 'text'});
  }
}
