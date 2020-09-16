import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Quantity } from 'src/app/models/quantity.model';
import { Product } from 'src/app/models/product.model';
import { Status } from 'src/app/models/status.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  user: User = new User();
  product: Product = new Product();
  orderStatus: Status = new Status();
  orderDetails = [];
  cname: string;
  address: string;
  pin: number;
  phone: number;
  date: string;
  time: string;
  amount = 12.0;
  error = false;
  success = false;
  listOfProduct;
  statusList = [];
  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    var today = new Date();
    this.date = (today.toJSON().slice(0, 10)).toString();
    this.time = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()).toString();
  }



  onSubmit(formData) {
    this.user.email = sessionStorage.getItem("id");
    this.orderStatus.date = this.date;
    this.orderStatus.time = this.time;
    this.orderStatus.status = "Ordered";
    this.statusList.push(this.orderStatus);
    let obj = {
      cname: formData.value.cname,
      date: this.date,
      time: this.time,
      address: formData.value.address,
      pin: formData.value.pin,
      phone: formData.value.phone,
      amount: this.cartService.totalPrice(),
      listOfProduct: this.cartService.updatedItems(),
      user: this.user,
      status: this.statusList
    }
    this.orderService.createOrder(obj).subscribe(
      data => {
        this.error = false;
        this.success = true;
        this.cartService.clearCart();
        window.alert("success");
        this.router.navigate(['/products']);
      },
      err => {
        this.error = true;
        this.success = false;
        window.alert("Failed");
        this.router.navigate(['/cart']);
      }
    );


  }

}
