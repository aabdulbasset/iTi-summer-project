import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  authState: Boolean | any = null;
  visible: boolean = false;
  state: string = "login";
  items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      routerLink: "/",
      styleClass: "ml-2",
    },
  ];
  ngOnInit(): void {
    this.authState = !!this.authService.user;
  }

  login() {
    this.visible = true;
  }
  logout() {
    this.authService.setUser(null);
    this.authState = !!this.authService.user;
  }
  toggleState(state: string) {
    this.state = state;
  }
  toggleVisible(visible: boolean){
    this.visible = visible
    this.authState = !!this.authService.user
  }
}
