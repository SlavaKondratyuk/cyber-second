import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './main-page/news-list/news-list.component';
import { NewsItemComponent } from './main-page/news-item/news-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    NewsListComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: '', component: MainPageComponent },
    ]),
    SharedModule
  ]
})
export class MainModule { }
