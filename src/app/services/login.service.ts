import { Injectable } from '@angular/core';
import { User } from 'src/assets/interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList: User[] = [
    {
      email: 'admin@gmail.com',
      password: 'admin',
      phone: '0123456789',
    }
  ];

  getUserList(): User[] {
    return this.userList;
  };

  findUserByEmail(email: string): User | undefined {
    return this.userList.find(user => user.email === email);
  };

  logIn(email: string, phone: string): void {
    const user = this.findUserByEmail(email);
    if (user && user.phone === phone) {
      localStorage.setItem('userEmail', JSON.stringify(user.email));
      localStorage.setItem('userPhone', JSON.stringify(user.phone));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    }
  };

  logOut(): void {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('isLoggedIn');
  };
}
