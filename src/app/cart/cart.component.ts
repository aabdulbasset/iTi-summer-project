import { Component } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  hasCoupon = false;
  items = [
    {
      name: "Phone XL",
      price: 799,
      description: "A large phone with one of the best screens",
      qty: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Phone Mini",
      price: 699,
      description: "A great phone with one of the best cameras",
      qty: 1,
      image: "https://via.placeholder.com/150",
    },
  ];
  total = this.items.reduce((a, b) => a + b.price * b.qty, 0);
  notimplemented() {
    alert("Not implemented");
  }
  updateCart() {
    this.total = this.items.reduce((a, b) => a + b.price * b.qty, 0);
  }
}
