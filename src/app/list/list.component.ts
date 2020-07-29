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
      this.countryList.sort(this.compare);
      console.log(this.countryList);
    });
  }
  compare(a, b) {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    }
    else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  toggle = false;

  onClick(event) {
    console.log(event);
    this.toggle = !this.toggle;
  }

}
