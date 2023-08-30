import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../models/auth';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = ""
  password = ""

 constructor(private loginService: LoginService, private router: Router) {

 }

 onSubmit() {
  let status = this.loginService.login(new LoginRequest(this.username, this.password))
  switch (status) {
    case HttpStatusCode.Ok: {
      // do something
    }
  }
  this.router.navigate(["/home"])
}
}
