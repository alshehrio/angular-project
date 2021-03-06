import { Component } from '@angular/core';

import { LoginService } from '../../../shared/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
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
