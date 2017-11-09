import { EditProductComponent } from './../edit-product/edit-product.component';
import { CreateProductComponent } from './../create-product/create-product.component';
import { AdminGuard } from './../guards/admin.guard';
import { AuthGuard } from './../guards/auth.guard';
import { LoginComponent } from './../login/login.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { ManageProductsComponent } from './../manage-products/manage-products.component';
import { ManageOrdersComponent } from './../manage-orders/manage-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'manage-orders', component: ManageOrdersComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'manage-products', component: ManageProductsComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'create-product', component: CreateProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }


