import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  // item = { name: "", code: "" };
  item = {};
  showOnData = false;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      console.log(params);
      this.item = (params);
      this.showOnData = true;
      console.log(this.item);
    });
  }
}
