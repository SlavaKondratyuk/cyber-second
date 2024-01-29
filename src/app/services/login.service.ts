import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import User from 'src/assets/interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList: User[] = [
    {
      email: 'admin@g.com',
      password: 'admin123',
      phone: '0123456789',
    }
  ];

  currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) { }

  getUserList(): User[] {
    return this.userList;
  };

  findUserByEmail(email: string): User | undefined {
    return this.userList.find(user => user.email === email);
  };

  logIn(email: string, password: string): void {
    const user = this.findUserByEmail(email);
    if (user && user.password === password) {
      localStorage.setItem('userEmail', JSON.stringify(user.email));
      localStorage.setItem('userPhone', JSON.stringify(user.phone));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));

      this.currentUser.next(user);
      this.router.navigate(['/main']);
    }
  };

  logOut(): void {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('isLoggedIn');

    this.currentUser.next(null);
    this.router.navigate(['/authorize']);
  };

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      const userEmail = localStorage.getItem('userEmail');
      const userPhone = localStorage.getItem('userPhone');
      this.currentUser.next({
        email: userEmail?.toString() || '',
        phone: userPhone?.toString() || '',
        password: '',
      });

    }
    return this.currentUser.value !== null;
  };

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  };

  getUserPhone(): string | null {
    return localStorage.getItem('userPhone');
  };

  registerNewUser(user: User): void {
    this.userList.push(user);
  }
}
