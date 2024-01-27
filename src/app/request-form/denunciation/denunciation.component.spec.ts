import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciationComponent } from './denunciation.component';

describe('DenunciationComponent', () => {
  let component: DenunciationComponent;
  let fixture: ComponentFixture<DenunciationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciationComponent]
    });
    fixture = TestBed.createComponent(DenunciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
