import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BillType } from '../modals/bill.modal';
import { DataService } from '../Services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})

export class AddBillComponent implements OnInit {

  error = '';

  bill: BillType = {
    customerName: '',
    phoneNumber: null,
    orderDate: '',
    deliveryDate: '',
    status: '',
  };

  // In order to call that service function we need to intationate
  constructor(private _service: DataService, private _router: Router, private _itemService: ItemService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.url.subscribe(
      (url) => {
        if (url[0].path === 'editbill') {
          this._itemService.selectedItem.subscribe(
            (item) => this.bill = item
          )
        }
      }
    )
  }

  onFormSubmit(addBillForm: NgForm) {
    if (addBillForm.valid) {
      this.error = '';
      console.log(addBillForm.value);
      this._service.addBill(addBillForm.value).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/allbill']);
        },
        (err) => {
          console.log(err);

        }
      );
    }
    else {
      this.error = 'Please Enter All Details';
    }
  }
  onClick() {
    console.log(event);
    this._router.navigate(['/allbill']);
  }
}
