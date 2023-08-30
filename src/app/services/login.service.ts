import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, LogoutRequest } from '../models/auth';
import { environment } from "../environment"
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private AUTH_ENDPOINT = "/auth"
  private LOG_IN_ENDPOINT = "/login"
  private LOG_OUT_ENDPOINT = "/logout"

  private isLoggedIn = false
  private currentUser: LoginResponse | null = null

  constructor(private http: HttpClient) { }

  login(userLogin: LoginRequest): number {
    const url = environment.apiUrl + this.AUTH_ENDPOINT + this.LOG_IN_ENDPOINT;

    this.http
      .post( url, userLogin, { observe: "response" })
      .subscribe((response) => {
        if (response.status == HttpStatusCode.Ok) {
          this.currentUser = response.body as LoginResponse
          this.isLoggedIn = true
        }
        return response.status
      });
    // error or cant exercute this code
    return NaN;
  }

  logout() {
    if (!this.isLoggedIn) return
    this.isLoggedIn = false


    const url = environment.apiUrl + this.AUTH_ENDPOINT + this.LOG_OUT_ENDPOINT;
    if (this.currentUser) this.http
      .post(url, new LogoutRequest(this.currentUser?.username, this.currentUser?.authorization))
      .subscribe();

    this.currentUser = null
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  getUsername() {
    return this.currentUser?.username;
  }

  getAcceses() {
    return this.currentUser?.accesses;
  }

  /**
   * Attach this in all payload's header as HttpHeader.AUTHORIZATION (Authorization)
   * @returns this user creadential token
   */
  getToken() {
    return this.currentUser?.authorization;
  }
}
