import { Component, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  @Output() changeStateEvent = new EventEmitter<string>();
  @Output() visibleEvent = new EventEmitter<boolean>();

  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    username: new FormControl(""),
    fullname: new FormControl(""),
  });
  hasError = false;
  isLoading = false;
  constructor(private auth: AuthService) {}
  register() {
    this.hasError = false;
    this.isLoading = true;
    this.auth
      .register(
        this.registerForm.value.email!,
        this.registerForm.value.password!,
        this.registerForm.value.username!,
        this.registerForm.value.fullname!
      )
      .subscribe({
        next: () => {
          this.visibleEvent.emit(false);
          this.isLoading = false;
        },
        error: () => {
          this.hasError = true;
          this.isLoading = false;
        },
      });
  }
}
