import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginFormComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LoginFormComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
