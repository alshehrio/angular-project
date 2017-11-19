import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductsComponent, canActivate: [AuthGuard] },
      { path: 'my-orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] }
    ]),
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    ProductsFilterComponent,
    ProductsGridComponent,
    ShoppingCartComponent,
    ProductsComponent
  ]
})
export class ShoppingModule { }
