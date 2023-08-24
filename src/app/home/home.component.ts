import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    products:any;
    constructor(private api: ApiService) {
        this.fetchProducts()
    }
    fetchProducts(){
        this.api.get("/products").subscribe({next:(d)=>{
            this.products = d
        }})
    }
}
