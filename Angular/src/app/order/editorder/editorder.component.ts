import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  orderDetails;
  oid:number;
  cname:string;
  address:string;
  pin:number;
  phone:number;
  error:boolean;
  success:boolean;
  errorMessage:string;
  successMessage:string;


  constructor(private dataTransfer:DatatransferService,private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.dataTransfer.getData().subscribe(data=>this.orderDetails=data);
    this.oid=this.orderDetails.oid;
    this.cname=this.orderDetails.cname;
    this.address=this.orderDetails.address;
    this.pin=this.orderDetails.pin;
    this.phone=this.orderDetails.phone;
  }

  onSubmit(formData){
    this.error=false;
    this.success=true;
    this.successMessage="Updating...";
    this.orderService.updateOrder({ id: this.oid, orderData: JSON.stringify(formData.value) }).subscribe(
      data=>{
        this.error=false;
        this.success=true;
        this.successMessage="Updated";
        this.router.navigate(['orders']);
      },
      err=>{
        this.error=true;
        this.success=false;
        this.errorMessage="Unable to update"
      }
    );
    //this.router.navigate(['orders']);
  }
  

}
