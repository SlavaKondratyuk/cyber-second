import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenunciationComponent } from './denunciation/denunciation.component';
import { RouterModule } from '@angular/router';
import { UserInformationComponent } from './denunciation/user-information/user-information.component';
import { EventComponent } from './denunciation/event/event.component';
import { CrimePersonComponent } from './denunciation/crime-person/crime-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdditionalDataComponent } from './denunciation/crime-person/additional-data/additional-data.component';



@NgModule({
  declarations: [
    DenunciationComponent,
    UserInformationComponent,
    EventComponent,
    CrimePersonComponent,
    AdditionalDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DenunciationComponent },
    ]),
    ReactiveFormsModule
  ]
})
export class RequestFormModule { }
