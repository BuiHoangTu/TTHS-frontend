import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: any, callback: any) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http
      .get('user', { headers: headers })
      .subscribe((response) => {
        // set type `key of response` to parse string to key
        type responseKey = keyof typeof response;

        // use name as key not string
        if (response["name" as responseKey]) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        return callback && callback();
      });

  }
}
