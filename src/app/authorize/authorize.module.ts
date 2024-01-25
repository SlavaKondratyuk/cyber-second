import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './authorize/register-form/register-form.component';
import { LoginFormComponent } from './authorize/login-form/login-form.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
    AuthorizeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AuthorizeComponent },
    ]),
  ]
})
export class AuthorizeModule { }
