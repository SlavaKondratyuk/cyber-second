import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crime-person',
  templateUrl: './crime-person.component.html',
  styleUrls: ['./crime-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrimePersonComponent implements OnInit{
  @Input() crimePerson!: FormGroup;
  @Input() index!: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addAdditionalData();
  }

  createAdditionalData(): FormGroup {
    return this.formBuilder.group({
      dataType: [''],
      data: ['']
    });
  }

  get additionalData(): FormArray {
    return this.crimePerson?.get('additionalData_crimePersonEvent') as FormArray;
  }

  getAdditionalData(index: number): FormGroup {
    return this.additionalData?.at(index) as FormGroup;
  }

  addAdditionalData(): void {
    const additionalDataArray = this.additionalData;
    additionalDataArray.push(this.createAdditionalData());
  }

  removeAdditionalData(dataIndex: number): void {
    if (this.additionalData.length > 1) {
      const additionalDataArray = this.additionalData;
      additionalDataArray.removeAt(dataIndex);
    }
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    return this.crimePerson?.controls[controlName].hasError(errorName) && this.crimePerson.controls[controlName].touched;

  }
}
