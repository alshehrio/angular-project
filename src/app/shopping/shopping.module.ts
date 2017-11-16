import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductsGridComponent, canActivate: [AuthGuard] },
      { path: 'my-orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] }
    ]),
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    ProductsFilterComponent,
    ProductsGridComponent,
    ShoppingCartComponent
  ]
})
export class ShoppingModule { }
