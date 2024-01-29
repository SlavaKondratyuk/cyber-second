import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-denunciation',
  templateUrl: './denunciation.component.html',
  styleUrls: ['./denunciation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DenunciationComponent implements OnInit {
  denunciationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.denunciationForm = this.formBuilder.group({
      userInformation: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        middleName: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      event: this.formBuilder.group({
        typeEvent: ['', Validators.required],
        textEvent: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20000)]],
        imageArray: this.formBuilder.array([])
      }),
      crimePersons: this.formBuilder.array([this.createCrimePerson()])
    });
  }

  get userInformation(): FormGroup {
    return this.denunciationForm?.get('userInformation') as FormGroup;
  }

  get getEvent(): FormGroup {
    return this.denunciationForm?.get('event') as FormGroup;
  }

  get crimePersons(): FormArray {
    return this.denunciationForm?.get('crimePersons') as FormArray;
  }

  getCrimePerson(index: number): FormGroup {
    return this.crimePersons?.at(index) as FormGroup;
  }

  createCrimePerson(): FormGroup {
    return this.formBuilder.group({
      firstName_crimePersonEvent: [''],
      lastName_crimePersonEvent: [''],
      middleName_crimePersonEvent: [''],
      additionalData_crimePersonEvent: this.formBuilder.array([])
    });
  }

  addCrimePerson(): void {
    this.crimePersons.push(this.createCrimePerson());
  }

  removeCrimePerson(index: number): void {
    if(this.crimePersons.length > 1){
      this.crimePersons.removeAt(index);
    }
  }

  submitForm(): void {
    if (this.denunciationForm?.valid) {
      console.log(this.denunciationForm.value);
    }
    this.denunciationForm.markAllAsTouched();
  }
}
