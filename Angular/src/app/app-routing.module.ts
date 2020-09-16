import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { LogoutComponent } from './login/logout/logout.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AuthguardService } from './services/authguard.service';
import { ItemsComponent } from './order/items/items.component';
import { EditComponent } from './products/edit/edit.component';
import { EditorderComponent } from './order/editorder/editorder.component';
import { CartComponent } from './products/cart/cart.component';
import { CreateOrderComponent } from './products/create-order/create-order.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { AuthGuardForLoginService } from './services/auth-guard-for-login.service';
import { AddComponent } from './products/add/add.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UserordersComponent } from './order/userorders/userorders.component';
import { StatusComponent } from './order/status/status.component';
import { ChangeStatusComponent } from './order/status/change-status/change-status.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthguardService] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthguardService] },
  { path: 'orders', component: OrderComponent, canActivate: [AuthguardService] },
  { path: 'userorders', component: UserordersComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent, canActivate:[AuthGuardForLoginService] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthguardService] },
  //{ path:'orders/:oid', component: ItemsComponent},
  { path: 'orderproducts', component: ItemsComponent, canActivate: [AuthguardService] },
  { path: 'orderstatus', component: StatusComponent, canActivate: [AuthguardService] },
  { path: 'change-status', component: ChangeStatusComponent, canActivate: [AuthguardService] },

  { path: 'edit_product', component: EditComponent, canActivate: [AuthguardService] },
  { path: 'edit_order', component: EditorderComponent, canActivate: [AuthguardService] },
  { path: 'registration', component: RegistrationComponent,canActivate:[AuthGuardForLoginService] },
  { path: 'cart', component: CartComponent,  },
  { path: 'createorder', component: CreateOrderComponent, canActivate: [AuthguardService] },
  { path: 'add', component: AddProductComponent, canActivate: [AuthguardService] },
  { path: 'nav', component: NavigationComponent, canActivate: [AuthguardService] },
  { path: '**', component:PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
