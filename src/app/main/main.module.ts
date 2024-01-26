import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: '', component: MainPageComponent },
    ]),
  ]
})
export class MainModule { }
