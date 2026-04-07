import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Menu } from './features/menu/menu';
import { Cart } from './features/cart/cart';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
  { path: '', component: Login},
  { path: 'register', component: Register },
  { path: 'menu', component: Menu },
  { path: 'cart', component: Cart }
];