import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
})
export class CartItemComponent {
  @Input() product: any = {};
  @Output() updateCartEvent = new EventEmitter<any>();
  selectedQty: any = {};
  quantitiyOptions: { name: string; value: number }[] = [];
  constructor() {
    this.quantitiyOptions = this.makeOptions(this.product.stock || 10);
  }

  makeOptions(stock: number) {
    return Array(stock)
      .fill(0)
      .map((x, i) => ({ name: String(i + 1), value: i + 1 }));
  }
  changeQTY() {
    this.product.qty = this.selectedQty.value;
    this.updateCartEvent.emit("changed");
  }
  removeFromCart() {}
}
