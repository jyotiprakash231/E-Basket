import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ModifyordersComponent } from '../modifyorders/modifyorders.component';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {
  mail:string;
  constructor(private order:OrderService) { }

  ngOnInit(): void {
    this.mail=sessionStorage.getItem("id");
    console.log(this.mail);
  }

  columnDefs = [
    {headerName: 'Actions', field: 'action',cellStyle: {'text-align': 'left'},width: 240,cellRendererFramework: ModifyordersComponent },
    {headerName: 'Order Id', field: 'oid',sortable: true, filter: true, cellStyle: {'text-align': 'left'},width: 110 },
    {headerName: 'Customer Name', field: 'cname',cellStyle: {'text-align': 'left'}},
    {headerName: 'Address', field: 'address',cellStyle: {'text-align': 'left'},width: 110},
    {headerName: 'Phone', field: 'phone',cellStyle: {'text-align': 'left'},width: 150 },
    {headerName: 'Total Amount', field: 'amount',cellStyle: {'text-align': 'left'} ,width: 160},
    {headerName: 'Pin', field: 'pin',cellStyle: {'text-align': 'left'}  },
    {headerName: 'Date', field: 'date',sortable: true, filter: true,cellStyle: {'text-align': 'left'}  },
    {headerName: 'Time', field: 'time',sortable: true, filter: true,cellStyle: {'text-align': 'left'}},  
];

rowData:any;

data:any=this.order.getListOfUserOrders().subscribe(
  data=>{
    this.rowData=data;
  }
)
onSubmit(form) {
  console.log(form.value);
};

}
