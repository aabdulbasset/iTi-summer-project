import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

type User = { token: string; name: string };

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  token: String|null = localStorage.getItem("token") || null
  constructor(private api: ApiService) {}
  setUser(user: User | null) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }
  setToken(token: String){
    this.token = token
    localStorage.setItem("token",token as any)
  }
  login(email: string, password: string) {
    return new Observable((subscriber) => {
      this.api
        .post("/login", {

          email,
          password,
        })
        .subscribe(
          (res: any) => {
            this.setUser(res.user)
            this.setToken(res.token)
            subscriber.next(200);
          },
          (error) => {
            subscriber.error(error.status);
          }
        );
    });
  }
  register(
    email: string,
    password: string,
    username: string,
    fullname: string
  ) {
    return new Observable((subscriber) => {
      this.api
        .post("/register", {
          username,
          email,
          password,
          fullname,
        })
        .subscribe(
          (res) => {
            this.user = res as User;
            subscriber.next(200);
          },
          (error) => {
            subscriber.error(error.status);
          }
        );
    });
  }
}
