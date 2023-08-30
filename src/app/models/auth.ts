export class LoginRequest {
  constructor(public username: string, public password: string) {
  }
}

export class LoginResponse {
  constructor(
    public username: string,
    public accesses: Array<String>,
    public authorization: string
  ) {}
}

export class LogoutRequest {
  constructor(
    public username: string,
    public authorization: string
  ) {}
}
