import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  post(url, body, params?) {
    return this.http.post(url, body, { params })
      .map(response => response.json());
  }

  get(url, params?) {
    return this.http.get(url, { params })
      .map(response => response.json());
  }

  update(url, body, params?) {
    return this.http.put(url, body, { params })
      .map(response => response.json());
  }

  delete(url, params?) {
    return this.http.delete(url, { params })
      .map(response => response.json());
  }

}
