import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FaqComponent,
    FaqItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FaqComponent },
    ]),
    FormsModule,
  ]
})
export class FaqModule { }
