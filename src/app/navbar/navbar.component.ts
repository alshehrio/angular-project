import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private logingService: LoginService) { }

  logout() {
    this.logingService.logout();
  }

  isAdmin() {
    return this.logingService.isAdmin();
  }

  get name() {
    return this.logingService.name;
  }

}
