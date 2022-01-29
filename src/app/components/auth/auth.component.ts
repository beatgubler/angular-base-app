import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogin: any;

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
    this.isLogin = true;
  }

  switchAuthModeHandler() {
    this.isLogin = !this.isLogin;
  }

}
