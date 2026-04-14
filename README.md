# 🍔 Food App - Angular Project

## 📌 Description

Food App is a web application built using Angular that allows users to browse food items, add them to a cart, and proceed to checkout. The application also includes authentication and multilingual support.

---

## 🌐 Live Site

**Live Site:** https://divyathomas-97.github.io/food-app/

---

## 🚀 Features

* 🔐 User Authentication (Login & Register)
* 🛒 Add to Cart functionality
* ➕ Increase/Decrease item quantity
* 💳 Checkout process
* 🌐 Multilingual Support (English & Arabic)
* 🔁 Language switch with RTL support
* 🔒 Route protection using AuthGuard

---

## 🛠️ Technologies Used

* Angular (Standalone Components)
* TypeScript
* Angular Material UI
* ngx-translate (i18n)
* RxJS
* HTML & CSS

---

## 📂 Project Structure

```id="3r0z2z"
public/
 └── assets/
      └── i18n/
           ├── en.json
           └── ar.json

src/
 └── app/
      ├── core/
      │     ├── guards/
      │     │     └── auth.guard.ts
      │     └── services/
      │           ├── auth.service.ts
      │           ├── menu.service.ts
      │           ├── cart.service.ts
      │           └── language.service.ts
      │
      ├── features/
      │     ├── auth/
      │     │     ├── login/
      │     │     └── register/
      │     ├── cart/
      │     └── menu/
      │
      └── shared/
            ├── header/
            └── material.ts
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash id="gq6h3v"
git clone https://github.com/your-username/food-app.git
cd food-app
```

2. Install dependencies

```bash id="l8r4fd"
npm install
```

3. Run the application

```bash id="r1p9kn"
ng serve
```

4. Open in browser

```id="l0mb4r"
http://localhost:4200
```

---

## 🌍 Multilingual Setup

* Translation files located in:

```id="m6y0ux"
public/assets/i18n/
```

* Supported languages:

  * English (en)
  * Arabic (ar)

* Implemented using ngx-translate

---

## 🔐 Authentication

* Authentication handled using localStorage
* Protected routes using AuthGuard:

  * Menu
  * Cart
  * Checkout

---

## 🚀 Deployment

Build the project:

```bash id="0ztsm2"
ng build --configuration production --base-href "/food-app/"
```

Deploy using GitHub Pages:

```bash id="t6n1xv"
npx angular-cli-ghpages --dir=dist/food-app
```

---

## 📌 Notes

* Menu data is fetched from a mock API
* Authentication is implemented for demo purposes

---

## 👩‍💻 Author

**Divya Thomas**

---

## 📄 License

This project is for educational and evaluation purposes.
