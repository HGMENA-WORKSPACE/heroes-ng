import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  protected data: any = {};

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  reloadNavigate() {
    this.navigateTo(this.router.url);
  }

  shareSetData(key: string, item: any) {
    this.data[key] = item;
  }

  shareGetData(key: string): any {
    return this.data[key];
  }

  setItemLocalStorage(key: string, value: any) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  getItemLocalStorage(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (e) {}
  }

  removeItemLocalStorage(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }
}
