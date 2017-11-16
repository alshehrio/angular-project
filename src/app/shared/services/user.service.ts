import { User } from './../models/user.model';
import { HttpService } from './http.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends FirebaseService<User> {
  private userDataUrl;

  constructor(public http: HttpService) {
    super('users', http);
  }

  toBussninsObejct({ id, email, isAdmin, name }): User {
    const user: User = Object.create(User.prototype);
    user.constructor.apply(user, [id, email, isAdmin, name]);
    return user;
  }

  toBackendObject(user: User) {
    return user;
  }

}
