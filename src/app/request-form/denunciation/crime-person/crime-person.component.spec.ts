import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimePersonComponent } from './crime-person.component';

describe('CrimePersonComponent', () => {
  let component: CrimePersonComponent;
  let fixture: ComponentFixture<CrimePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimePersonComponent]
    });
    fixture = TestBed.createComponent(CrimePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
