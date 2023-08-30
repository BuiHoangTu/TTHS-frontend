import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TTHS-frontend';

  greeting = { 'id': 'XXX', 'content': 'Hello World' };

  constructor(private user: LoginService) {}

  logout() {
    this.user.logout();
    window.location.reload();
  }
}

