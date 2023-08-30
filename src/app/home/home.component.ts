import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = "Home";

  constructor(protected user: LoginService, private router: Router) {

  }

  authenticated() {
    return this.user.isUserLoggedIn();
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
