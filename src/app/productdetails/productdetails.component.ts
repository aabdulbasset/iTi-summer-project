import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
    product = {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        image: 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg'
    }
    quantity: any;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(res => console.log(res['id']));
    }
    addToCart(productId:number) {
        throw new Error("Method not implemented.");
    }
}
