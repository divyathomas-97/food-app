import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartItem, CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class Header implements OnInit {

    cartItems: CartItem[] = [];
    cartCount: number = 0;
    constructor(
        private cartService: CartService,
        private location: Location, 
        private router: Router
    ) { }

    ngOnInit() {
        this.cartService.cart.subscribe(items => {
            console.log(items);
            this.cartCount = this.cartService.getTotalCount();
            this.cartItems = items;
        });
    }

    goToCart() {
        if (this.cartCount != 0) {
            this.router.navigate(['/cart']);
        }
    }

    goBack() {
        this.location.back();
    }
}