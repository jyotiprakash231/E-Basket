import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {
  itemdata:any;
  oid:number;
  time:string;
  date:string;
  amount:number; currentTime:string; currentDate:string;currentStatus;
  status:Status=new Status();orderStatus;allStatus=[];
  statuses=["Order Confirmed","Products Packed","Waiting For Pickup","Order Picked Up","On The Way","Out For Delivery","Delivered"];
  constructor(private data: DatatransferService, private router: Router, private order: OrderService) { }

  ngOnInit(): void {
    var today = new Date();
    this.currentDate = (today.toJSON().slice(0, 10)).toString();
    this.currentTime = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()).toString();
    try {
      this.data.getData().subscribe(
        itemData => this.itemdata = itemData,
        err => {
          window.alert("Unable to load");
          this.router.navigate(['orders']);
        }
      );
      this.oid = this.itemdata.oid;
      this.time = this.itemdata.time;
      this.date = this.itemdata.date;
      this.amount = this.itemdata.amount;
      this.orderStatus=this.itemdata.status;
      this.statusCheck();
    } catch{
      window.alert("Please chose a order");
      this.router.navigate(['orders']);
    }


  }

  statusCheck(){
    for(let obj of this.orderStatus){
      this.allStatus.push(obj);
    }
    this.currentStatus=this.allStatus.slice(-1)[0].status;
    let position=this.statuses.indexOf(this.currentStatus);
    this.statuses=this.statuses.slice(position+1);
    console.log(this.statuses);

    

  }

  onSubmit(form) {
    console.log(form.value);
    this.status.date = this.currentDate;
    this.status.time = this.currentTime;
    this.status.status = form.value.status;
    console.log(JSON.stringify(this.status));
    this.order.updateStatus(this.status, this.oid).subscribe(
      data => {
        window.alert("order updated");
        this.router.navigate(['orders']);
      },
      err => {
        window.alert("Unable to update status");
        this.router.navigate(['orders']);
      }
    )

  }



}
