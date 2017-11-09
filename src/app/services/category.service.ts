import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  categoryUrl: string;

  constructor(private http: HttpService, loginService: LoginService) {
    this.categoryUrl = `https://fir-demo-524e3.firebaseio.com/categories.json?auth=${loginService.token}`;
  }

  list() {
    return this.http.get(this.categoryUrl)
      .map(categories => Object.keys(categories).map(key => ({ id: key, ...categories[key] })));
  }
}
