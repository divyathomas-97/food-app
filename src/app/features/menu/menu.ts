import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { CartService } from '../../core/services/cart.service';
import { Header } from '../../shared/components/header/header';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

interface Dish {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  type: string;
  price: number;
  addoncat?: any[];
  count?: number;
  image?: string;
  calories?: number;
}

interface Category {
  id: number;
  name_en: string;
  name_ar: string;
  dishes: Dish[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports:
    [CommonModule,
      SharedModule,
      Header,
      TranslateModule
    ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu implements OnInit {
  type: 'veg' | 'non-veg' = "veg";
  categories: Category[] = [];
  cartCount: number = 0;

  constructor(private http: HttpClient,
    // private router: Router,
    private cartService: CartService,
  public langService: LanguageService) { }

  ngOnInit() {
    this.loadMenu();
  }

    loadMenu() {
    console.log('111', this.categories);
    this.http.get<Category[]>('https://mocki.io/v1/c1b3cc6b-68ee-48b2-8ff4-6880ed40321e').pipe(
      map(categories => {
        console.log(categories);

        return categories.map(category => ({
          ...category,
          dishes: category.dishes.map(d => ({ ...d, count: 0 })),
        }));
      })
    ).subscribe(data => this.categories = data);
  }

  getCategoryName(category: Category) {
  return this.langService.getLang() === 'ar'
    ? category.name_ar
    : category.name_en;
}

getDishName(dish: Dish) {
  return this.langService.getLang() === 'ar'
    ? dish.name_ar
    : dish.name_en;
}


getDishDesc(dish: Dish) {
  return this.langService.getLang() === 'ar'
    ? dish.description_ar
    : dish.description_en;
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


switchLang(lang: string) {
        this.langService.setLanguage(lang);
    }

}