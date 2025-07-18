import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean | undefined;
  constructor() {
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem('token', 'your-jwt-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
