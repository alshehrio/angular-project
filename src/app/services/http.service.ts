import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  post(url, body) {
    return this.http.post(url, body)
      .map(response => response.json());
  }

  get(url) {
    return this.http.get(url)
      .map(response => response.json());
  }

  update(url, body) {
    return this.http.put(url, body)
      .map(response => response.json());
  }

  delete(url) {
    return this.http.delete(url)
      .map(response => response.json());
  }

}
