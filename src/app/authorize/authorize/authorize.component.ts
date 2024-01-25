import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizeComponent {
  register = false;

  constructor(private c: ChangeDetectorRef) { }

  toggleRegister() {
    this.register = !this.register;
    this.c.markForCheck();
  }
}
