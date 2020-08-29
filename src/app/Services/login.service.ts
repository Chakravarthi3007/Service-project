import { Injectable } from '@angular/core';

import { UserModel } from '../modals/user.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // If valid user then login function returns true or else false
  login(userData: UserModel): boolean {
    if (userData.username === 'admin' && userData.pwd === 'admin') {
      console.log("false");
      return true;
    }
    else {
      console.log("true");
      return false;
    }
  }
}
