import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  _usersUrl: string;

  constructor(public _http: HttpClient) {
    this._usersUrl = 'http://localhost:8080/home/daily-quote';
  }

  public get(): Observable<String> {
    return this._http.get<String>(this._usersUrl);
  }
}
