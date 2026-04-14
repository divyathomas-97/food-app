import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Menu } from './features/menu/menu';
import { Cart } from './features/cart/cart';
import { Register } from './features/auth/register/register';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { 
    path: '**', 
    redirectTo: 'login' 
  },
  {
    path: 'login', 
    component: Login,
 },
  { 
    path: 'register',
    component: Register
   },
  {

    path: 'menu',
    component: Menu,
    canActivate: [AuthGuard]
  },
  { path: 'cart', 
    component: Cart,
    canActivate: [AuthGuard]
  }
];