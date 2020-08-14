import { Component, OnInit } from '@angular/core';

import { DataService } from '../Services/data.service';
import { BillType } from '../modals/bill.modal';

@Component({
  selector: 'app-table-bill',
  templateUrl: './table-bill.component.html',
  styleUrls: ['./table-bill.component.css']
})
export class TableBillComponent implements OnInit {

  billArray: BillType[];

  constructor(private _service: DataService) { }

  ngOnInit() {
    this._service.getAllBill().subscribe(
      (res) => {
        this.billArray = (res['data']);
        console.log(res['data']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
