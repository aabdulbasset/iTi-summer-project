import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
    product:any
    quantity: any;
    constructor(private route: ActivatedRoute,private api: ApiService) {

        this.route.params.subscribe(res => {
            api.get("/products/"+res['id']).subscribe({next: d=>{
                this.product = d
            }})
        });
    }
    addToCart(productId:number) {
        this.api.post('/addtocart',{
            productID: productId
        }).subscribe({next:(d:any)=>{
            alert("Success")
        },error: err=>{
            alert("Failed"+err)
        }})
    }
}
