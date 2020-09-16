import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { OrderService } from 'src/app/services/order.service';
import { LoginRegistrationService } from 'src/app/services/login-registration.service';



@Component({
  selector: 'app-modifyorders',
  templateUrl: './modifyorders.component.html',
  styleUrls: ['./modifyorders.component.css']
})
export class ModifyordersComponent implements OnInit {
  loginAs;
  data:any;
  param:any;
  columnDefs:any;
  rowData:any;
  show:boolean=false;

  constructor(private router:Router,private dataTransfer:DatatransferService,private orderService:OrderService,private login:LoginRegistrationService) { }

  ngOnInit(): void {
    this.loginAs=this.login.loginAs();
  }


  agInit(param){
    this.param=param;
    this.data=param.value;
  }
  viewItems(){
    //this.router.navigate(['/orders',this.param.data.oid]);
    this.dataTransfer.setData(this.param.data.listOfProduct);

  }
  editOrder(){
    //this.router.navigate(['/orders',this.param.data.oid]);
    this.dataTransfer.setData(this.param.data);
  }

  setStatus(){
    this.dataTransfer.setData(this.param.data);
  }

  orderStatus(){
    this.dataTransfer.setData(this.param.data.oid);
  }

  cancelOrder(){
    this.orderService.cancelOrder(this.param.data.oid).subscribe(
      data=>{
        window.alert("Order cancelled");
        this.router.navigate(['products']);
      },
      err=>{
        console.log(err);
        //window.alert("Order cancelled");
        //this.router.navigate(['products']);
      }
    );
  }
}
