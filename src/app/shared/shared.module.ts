import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpService } from './services/http.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ProductCardComponent,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    HttpService,
    AuthGuard,
    LoginService,
    UserService
  ]
})
export class SharedModule { }
