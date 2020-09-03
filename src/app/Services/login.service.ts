import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../modals/user.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLoggedIn = false;
  localStorageKey = 'isLoggedIn';
  constructor(private _router: Router) { }

  // If valid user then login function returns true or else false
  login(userData: UserModel): boolean {
    if (userData.username === 'admin' && userData.pwd === 'admin') {
      console.log("false");
      this._isLoggedIn = true;
      localStorage.setItem(this.localStorageKey, 'true');
      return true;
    }
    else {
      console.log("true");
      this._isLoggedIn = false;
      localStorage.setItem(this.localStorageKey, 'false');
      return false;
    }
  }
  get isLoggedIn(): boolean {

    if (localStorage.getItem(this.localStorageKey) === 'true') {
      return true;
    } else {
      return false;
    }
  }
  logOut(): void {
    this._router.navigate(['']);
    this._isLoggedIn = false;
    localStorage.setItem(this.localStorageKey, 'false');
  }
}
