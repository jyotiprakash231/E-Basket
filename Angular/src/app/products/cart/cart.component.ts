import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  numberOfItems:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  productInCart=this.cartService.viewProductsInCart();
  
  cartValue=this.cartService.totalPrice();

  check(){
    if(this.cartService.viewProductsInCart().length===0){
      return false;
    }
    return true;
  }


  clearCart(){
    console.log(this.productInCart.length);
    this.cartService.clearCart();
  }
}
