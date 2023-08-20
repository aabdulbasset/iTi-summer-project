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
  constructor(private api: ApiService) {}
  setUser(user: User | null) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }
  login(email: string, password: string) {
    return new Observable((subscriber) => {
      this.api
        .post("https://dummyjson.com/auth/login", {
          username: email,
          email,
          password,
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
  register(
    email: string,
    password: string,
    username: string,
    fullname: string
  ) {
    return new Observable((subscriber) => {
      this.api
        .post("https://dummyjson.com/auth/register", {
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
