import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Header } from '../../shared/components/header/header';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../core/services/menu.service';
import { MATERIAL_MODULES } from '../../shared/material';

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
    [
      CommonModule,
      ...MATERIAL_MODULES,
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
  filter: 'all' | 'veg' | 'non-veg' = 'all';

  constructor(
    private cartService: CartService,
    private menuService: MenuService,
    public langService: LanguageService
) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.getMenu()
    .subscribe(data => this.categories = data);
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
      this.cartService.addItem({ ...dish, count: dish.count ? dish.count + 1 : 1 });
      this.updateCart();
  }


  removeItem(dish: Dish) {
    if (dish.count && dish.count > 0) {
      dish.count--;
      this.cartService.removeItem({ ...dish, count: dish.count });
      this.updateCart();
    }
  }

  updateCart() {
    this.cartCount = this.cartService.getTotalCount();
  }

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
