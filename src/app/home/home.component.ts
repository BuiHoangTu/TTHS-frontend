import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = "Home";

  greeting = {
    id: 0,
    content: {}
  };

  constructor(private app: AppService, private http: HttpClient) {
    http
      .get("api/auth/token")
      .subscribe((data) => {
        type dataKey = keyof typeof data;
        const token = data["token" as dataKey];

        http
          .get(
            'http://localhost:8080/home/daily-quote',
            { headers: new HttpHeaders().set('X-Auth-Token', token.toString()) }
          )
          .subscribe(data => this.greeting.content = data);


      }, () => { })
  }

  authenticated() {
    return this.app.authenticated;
  }
}
