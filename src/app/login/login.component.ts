import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../modals/user.models';
import { faCoffee, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../Services/data.service';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin = new EventEmitter<boolean>();


  faCoffee = faWarehouse;

  user: UserModel = {
    username: '',
    pwd: '',
  };

  isError1 = false;
  isError2 = false;

  constructor(private _service: DataService, private _router: Router, private _loginservice: LoginService) { }

  ngOnInit(): void {
  }

  onFormSubmission(loginData: NgForm) {
    console.log(loginData);
    console.log(loginData.valid);
    if (loginData.valid) {
      this.isError1 = false;
      if (this._loginservice.login(loginData.value)) {
        this.isError2 = false;
        this._router.navigate(['/allbill']);
      } else {
        this.isError2 = true;
      }
    }
    else {
      this.isError1 = true;
      this.isError2 = false;
    }
  }

}
