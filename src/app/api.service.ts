import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }
  post(url: string, data?: any, contentType: string = "application/json") {
    return this.http.post(url, data || {}, {
      headers: {
        "Content-Type": contentType,
      },
    });
  }
}
