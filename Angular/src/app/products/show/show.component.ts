import { Component, OnInit } from '@angular/core';
import { CellCustomComponent } from 'src/app/products/cell-custom/cell-custom.component';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { DatatransferService } from 'src/app/services/datatransfer.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  loginAs = sessionStorage.getItem("loginAs");


  //   columnDefs = [
  //     {headerName: 'Actions', field: 'action',cellStyle: {'text-align': 'left'}, cellRendererFramework: CellCustomComponent },
  //     {headerName: 'Product Id', field: 'pid',sortable: true, filter: true, hide: true, suppressColumnsToolPanel: true,cellStyle: {'text-align': 'left'} },
  //     {headerName: 'Name', field: 'name',sortable: true, filter: true,cellStyle: {'text-align': 'left'}  },
  //     {headerName: 'Price', field: 'price',sortable: true, filter: true,cellStyle: {'text-align': 'left'}},
  //     {headerName: 'Quantity', field: 'quantity',cellStyle: {'text-align': 'left'}},
  //     {headerName: 'Description', field: 'description',cellStyle: {'text-align': 'left'}},

  // ];

  rowData: any;
  success: boolean = false;
  error: boolean = false;
  successMessage;
  errorMessage;

  constructor(private productService: ProductService, private cartService: CartService, private dataTransfer: DatatransferService) { }

  ngOnInit(): void {
  }

  data: any = this.productService.getListOfProducts()
    .subscribe(
      data => {
        this.rowData = data;
      },
      error => console.log(error)
    );

  addToCart(product) {
    if (this.cartService.addToCart(product)) {
      this.successMessage = "Added to cart";
      this.success = true;
      this.error = false;
      window.setTimeout(() => {
        this.success = false;
      }, 600);
      this.productService.getListOfProducts().subscribe(
        data=>{
          this.rowData=data;
        },
        err=>{
          console.log(err);
        }
      );
    } else {
      this.errorMessage = "Unable to add";
      this.error = true;
      this.success = false;
      window.setTimeout(() => {
        this.error = false;
      }, 600);
    }
  }

  editProduct(obj) {
    console.log(obj);
    //this.router.navigate(['/orders',this.param.data.oid]);
    this.dataTransfer.setData(obj);
  }
  deleteProduct(obj) {
    console.log(obj.pid);
    this.productService.deleteProduct(obj.pid).subscribe(
      res => {
        this.successMessage = "Successfully deleted";
        this.success = true;
        this.error = false;
        this.productService.getListOfProducts()
          .subscribe(
            data => {
              this.rowData = data;
            },
            error => console.log(error)
          );
        window.setTimeout(() => {
          this.success = false;
        }, 2000);

      },
      err => {
        this.errorMessage = "Unable to delete";
        this.error = true;
        this.success = false;
        window.setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    );

  }



}
