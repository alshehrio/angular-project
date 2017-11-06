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
      { path: '', component: HomeComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }


