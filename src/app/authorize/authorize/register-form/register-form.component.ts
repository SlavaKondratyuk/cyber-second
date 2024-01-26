import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  @Output() register: EventEmitter<boolean> = new EventEmitter<boolean>();

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private login: LoginService
    ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/), Validators.maxLength(13)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    if (!this.registrationForm.valid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.login.registerNewUser(
      {
        email: this.registrationForm.value.email,
        phone: this.registrationForm.value.phone,
        password: this.registrationForm.value.password
      }
    );
    this.toggleRegister();
    console.log('Form submitted:', this.registrationForm.value);
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.registrationForm.controls[controlName].hasError(errorName) && this.registrationForm.controls[controlName].touched;
  }

  toggleRegister() {
    this.register.emit(false);
  }
}
