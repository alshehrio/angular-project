import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  static setItem(key: string, item) {
    if (typeof item === 'string') {
      localStorage.setItem(key, item);
    } else {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  static getItem(key: string) {
    const item = localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
