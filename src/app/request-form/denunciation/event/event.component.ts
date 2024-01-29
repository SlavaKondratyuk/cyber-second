import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit{
  @Input() eventForm!: FormGroup;

  imageArray!: FormArray;
  crimeList = [
    'Вбивство',
    'Пограбування',
    'Шахрайство',
    'Інше',
    'Крадіжка',
    'Насильство',
  ];
  allowedExtensions = ['png', 'jpeg', 'jpg'];

  constructor(
    private formBuilder: FormBuilder,
    private c: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.imageArray = this.eventForm.get('imageArray') as FormArray;
  }

  handleImageUpload(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        if (this.isImageFileValid(file)) {
          this.readAndConvertImage(file);
        } else {
          console.warn(`Invalid file: ${file.name}`);
        }
      });
    }
  }

  isImageFileValid(file: File): boolean {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    return this.allowedExtensions.includes(fileExtension || '');
  }

  readAndConvertImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageArray.push(this.formBuilder.control(event.target.result));
      this.c.markForCheck();
    };

    reader.readAsDataURL(file);
    reader.onerror = (error) => {
      console.log(error);
    }
  }

  removeImage(index: number): void {
    this.imageArray.removeAt(index);
  }

  get imageArrayControls(): FormArray {
    return this.eventForm.get('imageArray') as FormArray;
  }


  hasError = (controlName: string, errorName: string) => {
    return this.eventForm.controls[controlName].hasError(errorName) && this.eventForm.controls[controlName].touched;
  }

}
