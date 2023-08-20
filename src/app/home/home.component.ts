import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
