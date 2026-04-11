import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../core/services/cart.service';
import { Header } from '../../shared/components/header/header';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, SharedModule, Header, TranslateModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {

  cartItems: CartItem[] = [];
  cartCount: number = 0;
  constructor(
    private cartService: CartService,
    private router: Router,
    public langService: LanguageService
  ) { }

  ngOnInit() {
    this.cartService.cart.subscribe(items => {
      console.log(items);
      this.cartCount = this.cartService.getTotalCount();
      this.cartItems = items;
    });
  }

  getName(item: CartItem) {
    return this.langService.getLang() === 'ar'
      ? item.name_ar
      : item.name_en;
  }

  addItem(item: CartItem) {
    console.log(item);
    this.cartService.addItem(item);
  }

  removeItem(item: CartItem) {
    console.log(item);
    this.cartService.removeItem(item);
  }

  getTotal() {
    return this.cartService.getTotalPrice();
  }

  checkout() {
    this.cartService.clearCart();
    this.router.navigate(['/menu']);
  }
}
