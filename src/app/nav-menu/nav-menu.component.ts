import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isMenuOpen = false;
  faXmark = faXmark;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
