import { Injectable } from '@angular/core';
import { Quantity } from '../models/quantity.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productInCrat = [];
  updatedQuantity=[];
  total: number;
  quantity:Quantity;
  product:Product;
  constructor() { }

  addToCart(product) {

    for(let products of this.productInCrat){
      if(products.pid===product.pid){
        products.quantity=products.quantity+product.quantity;
        products.price=products.price+product.price;
        //this.productInCrat.push(products);
        return true;
      }
    }

    this.productInCrat.push(product);
    //console.log(product.pid);
    return true;
  }

  totalPrice() {
    this.total=0
    for (let product of this.productInCrat) {
      this.total += product.price;
    }
    return this.total;
  }

  viewProductsInCart() {
    
    return this.productInCrat;
  }

  updatedItems(){
    console.log("------------------");
    console.log(this.productInCrat);
    for(let products of this.productInCrat){
      this.quantity=new Quantity();
      this.quantity.product=products;
      this.quantity.userQuantity=products.quantity;
      this.quantity.totalPrice=products.price;
      this.updatedQuantity.push(this.quantity);
    }
    console.log(this.updatedQuantity);
    return this.updatedQuantity;
  }

  clearCart() {
    this.total=0;
    this.productInCrat = [];
    this.updatedQuantity=[];
    return this.productInCrat;
  }
}
