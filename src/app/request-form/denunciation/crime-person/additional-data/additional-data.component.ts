import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalDataComponent {
  @Input() additionalData!: FormGroup;
  @Input() index!: number;

  types = [
    { value: 'phone', viewValue: 'Телефон' },
    { value: 'email', viewValue: 'Email' },
    { value: 'socialNetwork', viewValue: 'Соціальна мережа' },
    { value: 'ip', viewValue: 'Ip-адреса' },
    { value: '', viewValue: 'Clean'}
  ];

  constructor() { }

}
