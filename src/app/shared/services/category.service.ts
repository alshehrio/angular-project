import { Injectable } from '@angular/core';

import { Category } from './../models/category.model';
import { FirebaseService } from './firebase.service';
import { HttpService } from './http.service';

@Injectable()
export class CategoryService extends FirebaseService<Category> {

  constructor(public http: HttpService) {
    super('categories', http);
  }

  toBussninsObejct({ id, name }): Category {
    const category = Object.create(Category.prototype);
    category.constructor.apply(category, [id, name]);
    return category;
  }

  toBackendObject(category: Category) {
    return category;
  }

}
