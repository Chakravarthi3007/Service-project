import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { TableBillComponent } from './table-bill/table-bill.component';
import { AddBillComponent } from './add-bill/add-bill.component';

const routes: Routes = [
  { path: '', redirectTo: 'allbill', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'more', component: MoreInfoComponent },
  { path: 'allbill', component: TableBillComponent },
  { path: 'addbill', component: AddBillComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
