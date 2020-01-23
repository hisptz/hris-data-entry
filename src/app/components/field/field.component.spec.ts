import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
