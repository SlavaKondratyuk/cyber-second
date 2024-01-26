import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();      
    }
    this.login.logIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName) && this.loginForm.controls[controlName].touched;
  }
}
