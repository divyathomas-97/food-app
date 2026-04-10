import { Injectable, signal } from '@angular/core';
interface User {
  username: string;
  password: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  users = signal<User[]>([]);

  register(user: User) {
    this.users.update(u => [...u, user]);
  }

  login(username: string, password: string): boolean {
    return this.users().some(
      u => u.username === username && u.password === password
    );
  }
}