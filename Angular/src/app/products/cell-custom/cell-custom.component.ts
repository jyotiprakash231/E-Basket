import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DatatransferService } from 'src/app/services/datatransfer.service';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit {
  loginAs=sessionStorage.getItem("loginAs");
  data:any;
  param:any;
  crat=[];
  constructor(private productService:ProductService,private dataTransfer:DatatransferService) { }

  agInit(param){
    this.param=param;
    this.data=param.value;
  }

  ngOnInit(): void {
  }

  editProduct(){
    console.log(this.param.data);
    //this.router.navigate(['/orders',this.param.data.oid]);
    this.dataTransfer.setData(this.param.data);
  }
  deleteProduct(){
    console.log(this.param);
    this.productService.deleteProduct(this.param.data.pid).subscribe();
    
  }
  addToCart(data){
    //let item=this.param.data;
    this.crat.push(data);
  }
}
