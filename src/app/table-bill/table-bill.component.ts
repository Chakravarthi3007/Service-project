import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';

import { faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../Services/data.service';
import { BillType } from '../modals/bill.modal';

@Component({
  selector: 'app-table-bill',
  templateUrl: './table-bill.component.html',
  styleUrls: ['./table-bill.component.css']
})
export class TableBillComponent implements OnInit {

  billArray: BillType[];
  faCoffee = faSignInAlt;
  backBillArray: BillType[];
  toggle = false;


  constructor(private _service: DataService, private _router: Router) { }

  ngOnInit() {
    this._service.getAllBill().subscribe(
      (res) => {
        this.billArray = (res['data']);
        this.backBillArray = (res['data']);
        console.log(res['data']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  applyFilter(event: string, propertyType: string | number) {
    console.log(event);
    this.billArray = this.backBillArray.filter(e => {
      if (event === " ") {
        return true;
      } else {
        if (typeof e[propertyType] === 'number') {
          return e[propertyType].toString().includes(event);
        }
        else {
          return e[propertyType].toLocaleLowerCase().includes(event.toLocaleLowerCase());
        }
      }
    })
  }

  applyBtnFilter(filterType: string = '') {
    console.log(filterType);
    this.billArray = this.backBillArray.filter(e => {
      if (filterType === '' || e.status === filterType) {
        return true;
      } else {
        return false;
      }
    });
  }
  onClick(logout: any) {
    console.log(event);
    this._router.navigate(['/login'], { queryParams: logout });
  }

}
