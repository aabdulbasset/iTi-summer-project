import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  @Output() changeStateEvent = new EventEmitter<string>();
  @Output() visibleEvent = new EventEmitter<boolean>();
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  hasError = false;
  isLoading = false;
  constructor(private auth: AuthService) {}
  login() {
    if (!this.loginForm.valid) {
      this.hasError = true;
      return;
    }
    this.isLoading = true;
    this.hasError = false;
    this.auth
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (res) => {
          this.visibleEvent.emit(false);
          this.isLoading = false;
        },
        error: (err) => {
          this.hasError = true;
          this.isLoading = false;
        },
      });
  }
}
