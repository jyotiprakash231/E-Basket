import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:Product;
  success:boolean=false;
  error:boolean=false;

  constructor(private dataTransfer:DatatransferService,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.dataTransfer.getData().subscribe(
      data=>this.product=data,
      err=>window.alert("unable to fetch"+err.error.message)
      );
  }

  onSubmit(editProductForm){
    this.productService.updateProduct(this.product.pid,JSON.stringify(this.product)).subscribe(
      res=>{
        editProductForm.reset();
        console.log("deleted");
        this.success=true;
        this.error=false;
      },
      err=>{
        this.error=true;
        this.success=false;
      }
    );
  }

}
