import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
})
export class CartItemComponent implements OnInit {
  @Input() product: any = {};
  @Output() updateCartEvent = new EventEmitter<any>();

  selectedQty: any = {};
  quantitiyOptions: { name: string; value: number }[] = [];
  constructor() {
    this.quantitiyOptions = this.makeOptions(this.product.stock || 10);
  }
  ngOnInit() {
    this.selectedQty = {
      name: String(this.product.quantity),
      value: this.product.quantity,
    };
  }
  makeOptions(stock: number) {
    return Array(stock)
      .fill(0)
      .map((x, i) => ({ name: String(i + 1), value: i + 1 }));
  }
  changeQTY() {
    this.product.quantity = this.selectedQty.value;

    this.updateCartEvent.emit({
      id: this.product.id,
      quantity: this.selectedQty.value,
    });
  }
  deleteItem() {
    this.updateCartEvent.emit({ id: this.product.id, quantity: 0 });
  }
}
