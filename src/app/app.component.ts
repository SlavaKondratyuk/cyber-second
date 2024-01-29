import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  title = 'cyber-second';

  constructor(private ls: LoginService) {}

  ngOnInit(): void {
    this.ls.isLoggedIn();
  }
}
