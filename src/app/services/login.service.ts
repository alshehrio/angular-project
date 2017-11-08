import { LocalstorageService } from './localstorage.service';
import { environment } from './../../environments/environment';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class LoginService {
  private loginUrl;
  private userDataUrl;

  constructor(private http: HttpService) {
    this.loginUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.apiKey}`;
    this.userDataUrl = `https://fir-demo-524e3.firebaseio.com/users/a.json?auth=`;
  }

  login(email, password) {
    return this.http.post(this.loginUrl, { email, password, returnSecureToken: true })
      .switchMap(login => {
        this.token = login.idToken;
        return this.http.get(this.userDataUrl + this.token);
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
    return LocalstorageService.getItem('token');
  }

  set token(token) {
    LocalstorageService.setItem('token', token);
  }

  private get userData() {
    return LocalstorageService.getItem('userData');
  }

  private set userData(userData) {
    LocalstorageService.setItem('userData', userData);
  }

  logout() {
    LocalstorageService.removeItem('token');
    LocalstorageService.removeItem('userData');
  }

  get name() {
    return this.userData ? this.userData.name : 'Username';
  }

}
