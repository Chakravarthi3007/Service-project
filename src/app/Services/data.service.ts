import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BillType } from '../modals/bill.modal';
import { observable } from 'rxjs';
import { UserModel } from '../modals/user.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;

  constructor(private _http: HttpClient) { }
  getCountryNames() {
    return this._http.get('https://run.mocky.io/v3/0783fd82-1d57-4df7-821b-65488fcd223e');
  }

  getAllBill() {
    return this._http.get('https://ufixibreak.herokuapp.com/bill/all');
  }

  addBill(bill: BillType) {
    // If we call the above function addBill it will return observable same way for the above get function
    // Post will also retunr observable
    return this._http.post('https://ufixibreak.herokuapp.com/bill/add', bill);

  }

  // login(user: UserModel) {
  //   return this._http.get('https://ufixibreak.herokuapp.com/bill/all');
  // }
}
