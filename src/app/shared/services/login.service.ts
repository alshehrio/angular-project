import { HttpService } from './http.service';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import * as ls from '../utils/localstorage.util';
import { UserService } from './user.service';

@Injectable()
export class LoginService {
  private loginUrl;

  constructor(private http: HttpService, private userService: UserService) {
    this.loginUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBPUKGPMmaJsVMqq-KaY56Kn5TPLAKOqks';
  }

  login(email: string, password) {
    return this.http.post(this.loginUrl, { email, password, returnSecureToken: true })
      .switchMap(login => {
        this.token = login.idToken;
        return this.userService.get(email.split('@')[0]);
      })
      .map(userData => this.userData = userData);
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

  set token(token) {
    ls.setItem('token', token);
  }

  private get userData() {
    return ls.getItem('userData');
  }

  private set userData(userData) {
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
