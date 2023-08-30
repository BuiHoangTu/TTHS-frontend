import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = "Home";

  constructor(protected user: LoginService, private http: HttpClient) {

  }

  authenticated() {
    return this.user.isUserLoggedIn();
  }
}
