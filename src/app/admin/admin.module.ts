import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'create-product', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'edit-product/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'manage-products', component: ProductsComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'manage-orders', component: OrdersComponent, canActivate: [AuthGuard, AdminGuard] }
    ]),
    DataTableModule,
    SharedModule
  ],
  declarations: [
    ProductFormComponent,
    ProductsComponent,
    OrdersComponent
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
