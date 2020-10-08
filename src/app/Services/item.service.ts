import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private selectedItemSubject = new BehaviorSubject({
    customerName: '',
    phoneNumber: null,
    orderDate: '',
    deliveryDate: '',
    status: '',
  })


  selectedItem = this.selectedItemSubject.asObservable();
  constructor() { }

  emitSelectedItem(item) {
    this.selectedItemSubject.next(item);
  }
}
