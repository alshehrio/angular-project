import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Entity } from '../models/entity.model';
import * as ls from '../utils/localstorage.util';
import { HttpService } from './http.service';

@Injectable()
export abstract class FirebaseService<T extends Entity> {
  public static TOKEN_KEY = 'token';
  private firebaseUrl = environment.firebaseUrl;

  constructor(public resourceType: string, public http: HttpService) { }

  abstract toBussninsObejct(backendObject: T): T;

  abstract toBackendObject(bussninsObejct);


  list(filter?) {
    return this.http.get(`${this.firebaseUrl + this.resourceType}.json`, { auth: ls.getItem(FirebaseService.TOKEN_KEY), ...filter })
      .map(backendObjects => Object.keys(backendObjects).map(key => ({ id: key, ...backendObjects[key] })))
      .map(backendObjects => backendObjects.map(this.toBussninsObejct));
  }

  create(body) {
    return this.http.post(`${this.firebaseUrl + this.resourceType}.json`, body, { auth: ls.getItem(FirebaseService.TOKEN_KEY) });
  }

  get(id) {
    return this.http.get(`${this.firebaseUrl + this.resourceType}/${id}.json`, { auth: ls.getItem(FirebaseService.TOKEN_KEY) })
      .map(backendObject => ({ id, ...backendObject }))
      .map(this.toBussninsObejct);
  }

  update(id, body) {
    return this.http.update(`${this.firebaseUrl + this.resourceType}/${id}.json`, body, { auth: ls.getItem(FirebaseService.TOKEN_KEY) });
  }

  delete(id) {
    return this.http.delete(`${this.firebaseUrl + this.resourceType}/${id}.json`, { auth: ls.getItem(FirebaseService.TOKEN_KEY) });
  }

}
