import { Component, Input } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product: any;
  constructor(private api:ApiService) {
  }
  addToCart(productID: string | number){
  this.api.post("/addtocart",{
    productID
  }).subscribe({next: (d)=>{
    alert('success')
  }})
}
}
