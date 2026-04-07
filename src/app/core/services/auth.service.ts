import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  users = signal<any[]>([]);

  register(user: any) {
    this.users.update(u => [...u, user]);
  }

  login(username: string, password: string): boolean {
    return this.users().some(
      u => u.username === username && u.password === password
    );
  }
}