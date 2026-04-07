FOOD APP - Angular Machine Test

Description

Food App built with Angular.

Features include:
- User registration and login
- Menu browsing with category tabs (Veg / Non-Veg / All)
- Add/remove items to cart
- Checkout with total price


Note: Multilingual support (English/Arabic) was planned but not implemented yet. Translation files and RTL support can be added in the future using ngx-translate.

Dependencies: 
- Angular 21
- Angular Material (@angular/material)
- RxJS (BehaviorSubject)
- Angular Router
- FormsModule & ReactiveFormsModule
- Installed @ngx-translate/core @ngx-translate/http-loader

Setup:
Clone the repo:
git clone <https://github.com/divyathomas-97/food-app.git>

Install dependencies:
npm install
Run the app:
ng serve
Open in browser:
http://localhost:4200

Configuration:
AuthService: manages user login/registration (in-memory).
CartService: manages cart items with reactive updates using BehaviorSubject.
Menu API: menu data loaded from a mock API.
Header Component: shows cart badge dynamically.

Folder Structure:
src/
├─ app/
│  ├─ core/services/   # AuthService, CartService
│  ├─ features/
│  │  ├─ menu/         # Menu component
│  │  ├─ cart/         # Cart component
│  │  ├─ auth/         # Login/Register components
│  ├─ shared/          # Header component, shared modules
