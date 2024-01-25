import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoPath = 'assets/img/national-sm.png';
  loggedIn = true;
  eMail = 'godsongfporever11@gmail.com';

  constructor() { }

  loggedInToggle() {
    this.loggedIn = !this.loggedIn;
  }
}
