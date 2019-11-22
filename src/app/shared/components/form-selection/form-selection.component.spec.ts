import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectionComponent } from './form-selection.component';

describe('FormSelectionComponent', () => {
  let component: FormSelectionComponent;
  let fixture: ComponentFixture<FormSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
