import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Header } from '../../shared/components/header/header';
import { SharedModule } from '../../shared/shared.module';

interface Dish {
  id: number;
  name: string;
  type: string;
  price: number;
  addoncat?: any[];
  count?: number;
  image?: string;
  calories?: number;
  description?: string;
}

interface Category {
  id: number;
  name: string;
  dishes: Dish[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports:
    [CommonModule,
      SharedModule,
      Header
    ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu implements OnInit {
  type: 'veg' | 'non-veg' = "veg";
  categories: Category[] = [];
  cartCount: number = 0;

  constructor(private http: HttpClient,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.loadMenu();
  }

    loadMenu() {
    console.log('111', this.categories);
    this.http.get<Category[]>('https://mocki.io/v1/63b66521-528c-4d42-a7dd-23f27e1b1de6').pipe(
      map(categories => {
        console.log(categories);

        return categories.map(category => ({
          ...category,
          dishes: category.dishes.map(d => ({ ...d, count: 0 })),
        }));
      })
    ).subscribe(data => this.categories = data);
  }

    addItem(dish: Dish) {
    dish.count = (dish.count || 0) + 1;
    console.log(dish, dish.count);
    this.cartService.addItem({ ...dish, count: dish.count ? dish.count + 1 : 1 });
    this.updateCart();
  }

  removeItem(dish: Dish) {
    console.log("removed", dish.count);
    if (dish.count && dish.count > 0) {
      console.log(dish, dish.count--);
      dish.count--;
      this.cartService.removeItem({ ...dish, count: dish.count });
      this.updateCart();
    }
  }

  updateCart() {
    this.cartCount = this.cartService.getTotalCount();
  }


  filter: 'all' | 'veg' | 'non-veg' = 'all';

  setFilter(type: 'all' | 'veg' | 'non-veg') {
    this.filter = type;
  }

  showDish(dish: any): boolean {
    if (this.filter === 'all') return true;
    return dish.type === this.filter;
  }




}