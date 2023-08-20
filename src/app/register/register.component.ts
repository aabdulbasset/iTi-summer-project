import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  @Output() changeStateEvent = new EventEmitter<string>();
}
