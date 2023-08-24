import { Component } from "@angular/core";
import { ApiService } from "../api.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  hasCoupon = false;
  items: any = [];
  total: Number = 0;
  constructor(private api: ApiService) {
    this.fetchCart();
  }

  notimplemented() {
    alert("Not implemented");
  }
  fetchCart() {
    this.api.get("/cart").subscribe({
      next: (d: any) => {
        this.items = d.cart;
        this.calculateTotal();
      },
    });
  }
  updateCart($event: any) {
    if ($event.quantity === 0) {
      this.deleteItem($event.id);
    } else if ($event.quantity > 0) {
      this.updateItem($event.id, $event.quantity);
    }
    this.calculateTotal();
  }
  deleteItem(id: number) {
    this.api.delete(`/cart/${id}`).subscribe({
      next: (d: any) => {
        this.fetchCart();
      },
    });
  }
  updateItem(id: number, quantity: number) {
    this.api.put(`/cart`, { quantity, productID: id }).subscribe({
      next: (d: any) => {
        this.fetchCart();
      },
    });
  }
  calculateTotal() {
    this.total = this.items
      .reduce((a: any, b: any) => a + b.price * b.quantity, 0)
      .toFixed(2);
  }
}
