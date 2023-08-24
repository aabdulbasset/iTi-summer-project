import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  BASE_URL = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.BASE_URL + url);
  }
  post(url: string, data?: any, contentType: string = "application/json") {
    return this.http.post(this.BASE_URL + url, data || {}, {
      headers: {
        "Content-Type": contentType,
      },
    });
  }
  put(url: string, data?: any, contentType: string = "application/json") {
    return this.http.put(this.BASE_URL + url, data || {}, {
      headers: {
        "Content-Type": contentType,
      },
    });
  }
  delete(url: string) {
    return this.http.delete(this.BASE_URL + url);
  }
}
