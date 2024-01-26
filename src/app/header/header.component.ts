import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  logoPath = 'assets/img/national-sm.png';
  loggedIn = false;
  eMail = '';
  userSubscription: any;

  constructor(
    private login: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.login.currentUser.subscribe(user => {
      this.loggedIn = !!user;
      this.eMail = user?.email || '';
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  loggedInToggle() {
    if (this.loggedIn) {
      this.login.logOut();
      this.loggedIn = false;
      this.router.navigate(['/authorize']);
    }
  }
}
