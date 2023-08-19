import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products = [
        {
            "id": 1,
            "name": "Product 1",
            "description": "Description for product 1",
            "price": 100
            
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "Description for product 2",
            "price": 200
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "Description for product 3",
            "price": 300
        },
    ]
}
