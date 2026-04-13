import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })

export class AuthService {
  private users: User[] = [];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  register(user: User): boolean {
    const userExists = this.users.find(u => u.username === user.username);
    if (userExists) {
      alert('Username already exists. Please choose a different one.');
      return false;
    }else {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
    }
  }

  login(user: User): boolean {
    const validUser = this.users.find(
      u => u.username === user.username && u.password === user.password
    );

    if (validUser) {
      localStorage.setItem('user', JSON.stringify(validUser));
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
  localStorage.removeItem('user'); 
}

}