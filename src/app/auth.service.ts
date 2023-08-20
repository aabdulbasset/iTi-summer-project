import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type User = {token: string, name: string};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: User|null  = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user') as string) : null;
    constructor() { }
    setUser(user: User|null) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));

    }


}
