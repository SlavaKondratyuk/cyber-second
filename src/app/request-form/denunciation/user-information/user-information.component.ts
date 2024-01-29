import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  @Input() userInformationForm!: FormGroup;

  hasError = (controlName: string, errorName: string) => {
    return this.userInformationForm.controls[controlName].hasError(errorName) && this.userInformationForm.controls[controlName].touched;
  }
}
