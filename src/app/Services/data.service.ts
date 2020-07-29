import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  getCountryNames() {
    return this._http.get('https://run.mocky.io/v3/0783fd82-1d57-4df7-821b-65488fcd223e');
  }
}
