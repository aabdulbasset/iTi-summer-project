import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl } from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  @Output() changeStateEvent = new EventEmitter<string>();
  @Output() visibleEvent = new EventEmitter<boolean>();
  email = new FormControl('')
  password = new FormControl('')
  hasError = false
  constructor(private auth: AuthService){

  }
  login(){
    this.auth.login(this.email.value!,this.password.value!).subscribe(data=>this.visibleEvent.emit(false),err=>(this.hasError=true))
    
  }
}
