import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';

import * as ls from '../utils/localstorage.util';
import { HttpService } from './http.service';
import { UserService } from './user.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
  private loginUrl;

  constructor(private http: HttpService, private userService: UserService) {
    this.loginUrl = environment.loginUrl;
  }

  login(email: string, password) {
    return this.http.post(this.loginUrl, { email, password, returnSecureToken: true })
      .map(login => login.idToken)
      .map(this.setToken)
      .switchMap(() => this.userService.get(email.split('@')[0]))
      .map(this.setUserData);
  }

  isLoggedIn() {
    return this.token;
  }

  isAdmin() {
    return this.userData ? this.userData.isAdmin : false;
  }

  get token() {
    return ls.getItem('token');
  }

  setToken(token) {
    ls.setItem('token', token);
  }

  private get userData() {
    return ls.getItem('userData');
  }

  private setUserData(userData) {
    ls.setItem('userData', userData);
  }

  logout() {
    ls.removeItem('token');
    ls.removeItem('userData');
  }

  get name() {
    return this.userData ? this.userData.name : 'Username';
  }

}
