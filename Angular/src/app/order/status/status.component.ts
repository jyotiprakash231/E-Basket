import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  oid:number;
  itemdata;
  orderDetails;
  time;
  date;
  name;
  currentStatus;
  amount;currentTime;currentDate;lastStatus;allStatus=[];
  status;
  constructor(private orderService:OrderService,private router:Router,private dataTransfer:DatatransferService,private data: DatatransferService) { }

  ngOnInit(): void {
    try{
      this.data.getData().subscribe(
        itemData => {this.oid = itemData;
          this.checkStatus(this.oid);
        },
        err => {
          window.alert("Unable to load");
        }
      );
    }catch{
      window.alert("please chose a order");
      this.router.navigate(['userorders']);
    }
    
  }

  checkStatus(oid){
    console.log("oid:"+oid);
    this.orderService.getStatus(oid).subscribe(
      data=>{
        this.orderDetails=data;
        this.check();
      },
      err=>window.alert("unable to track")
    )
  }

check(){
  this.name=sessionStorage.getItem("name")
  this.oid=this.orderDetails.oid;
  this.time=this.orderDetails.time;
  this.date=this.orderDetails.date;
  this.amount=this.orderDetails.amount;
  this.status=this.orderDetails.status;
  for(let obj of this.status){
    this.allStatus.push(obj);
  }
  
  this.currentStatus=this.allStatus.slice(-1)[0].status;
  console.log(this.currentStatus);
}

}
