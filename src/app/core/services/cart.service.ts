import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  count: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart = this.cartSubject.asObservable();

  addItem(item: CartItem) {
    const existing = this.cartItems.find(i => i.id === item.id);

    if (existing) {
      existing.count++;
    } else {
      this.cartItems.push({ ...item, count: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  removeItem(item: CartItem) {
    const existing = this.cartItems.find(i => i.id === item.id);

    if (!existing) return;

    if (existing.count > 1) {
      existing.count--;
    } else {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    }
    this.cartSubject.next(this.cartItems);
  }

  getTotalCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.count, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  }
  
clearCart() {
  this.cartItems = [];
  this.cartSubject.next([]);
}
 
}