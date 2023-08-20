import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(private authService: AuthService) {
    }
    authState: Boolean|any = null;
    items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/',
            styleClass: 'ml-2'
        }
      ]
      ngOnInit(): void {
        this.authState = !!this.authService.user
      }

      login(){
        this.authService.setUser({token:'123', name: 'John Doe'});
        this.authState = !!this.authService.user
      }
      logout(){
        this.authService.setUser(null);
        this.authState = !!this.authService.user
    }
}
