import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { AddComponent } from './products/add/add.component';
import { EditComponent } from './products/edit/edit.component';
import { DeleteComponent } from './products/delete/delete.component';
import { ProductService } from 'src/app/services/product.service';
import { ShowComponent } from './products/show/show.component';
import { CellCustomComponent } from './products/cell-custom/cell-custom.component';
import { ViewordersComponent } from './order/vieworders/vieworders.component';
import { ModifyordersComponent } from './order/modifyorders/modifyorders.component';

import {MatIconModule} from '@angular/material/icon';
import { ItemsComponent } from './order/items/items.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { EditorderComponent } from './order/editorder/editorder.component';
import { CartComponent } from './products/cart/cart.component';
import { CreateOrderComponent } from './products/create-order/create-order.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { UserordersComponent } from './order/userorders/userorders.component';
import { StatusComponent } from './order/status/status.component';
import { ChangeStatusComponent } from './order/status/change-status/change-status.component';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PathNotFoundComponent,
    ProductsComponent,
    OrderComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent,
    CellCustomComponent,
    ViewordersComponent,
    ModifyordersComponent,
    ItemsComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    EditorderComponent,
    CartComponent,
    CreateOrderComponent,
    AddProductComponent,
    HomeComponent,
    UserordersComponent,
    StatusComponent,
    ChangeStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    MatTableModule,

  ],
  providers: [ProductService],
  entryComponents:[CellCustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
