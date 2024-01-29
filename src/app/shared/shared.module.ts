import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    PaginationComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule

  ],
  exports: [
    PaginationComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
