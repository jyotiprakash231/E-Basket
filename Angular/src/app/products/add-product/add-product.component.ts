import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  error:boolean;
  errorMessage:string;
  info:boolean;
  infoMessage:string;
  success:boolean;
  successMessage:string;
  product:Product=new Product();
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.infoMessage="Adding...";
    this.error=false;
    this.success=false;
    this.info=true;
    this.product.quantity=1;
    this.productService.addProduct(this.product)
      .subscribe(
        data=>{
          this.successMessage="Added Successfully";
          this.info=false
          this.success=true;
          this.error=false;
          //this.router.navigate(["/login"]);
        },
        error=>{
          this.errorMessage="Something went wrong";
          this.info=false;
          this.error=true;
          this.success=false;
        }
      );
  }

  resetFormData(registrationForm){
    registrationForm.reset();
  }

}
