import { Component, OnInit,Input } from '@angular/core';
import {ModifyordersComponent } from 'src/app/order/modifyorders/modifyorders.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }
  //Table Headers(Coulumn name)hide: true, suppressColumnsToolPanel: true,
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

data:any=this.orderService.getListOfOrders().subscribe(
  data=>{
    this.rowData=data;
  }
)
onSubmit(form) {
  console.log(form.value);
};


}
