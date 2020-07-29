import { Component, OnInit } from '@angular/core';

import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countryList: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getCountryNames().subscribe((res) => {
      this.countryList = res['result'];
    }
    );
  }

}
