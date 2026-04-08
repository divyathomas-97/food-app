import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { CartItem, CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, SharedModule,TranslateModule ],
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class Header implements OnInit {

    cartItems: CartItem[] = [];
    cartCount: number = 0;
    constructor(
        private cartService: CartService,
        private location: Location, 
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

    goToCart() {
        if (this.cartCount != 0) {
            this.router.navigate(['/cart']);
        }
    }

    switchLang(lang: string) {
        this.langService.setLanguage(lang);
    }

    goBack() {
        this.location.back();
    }
}