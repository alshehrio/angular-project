import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'create-product', component: CreateProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'manage-products', component: ProductsComponent, canActivate: [AuthGuard, AdminGuard] },
      { path: 'manage-orders', component: OrdersComponent, canActivate: [AuthGuard, AdminGuard] }
    ]),
    DataTableModule,
    SharedModule
  ],
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    ProductsComponent,
    OrdersComponent
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
