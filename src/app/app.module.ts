import { LocalstorageService } from './services/localstorage.service';
import { AdminGuard } from './guards/admin.guard';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpService } from './services/http.service';
import { RoutingModule } from './routing/routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table/src/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    HomeComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    MyOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    DataTableModule
  ],
  providers: [
    HttpService,
    AuthGuard,
    LoginService,
    AdminGuard,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
