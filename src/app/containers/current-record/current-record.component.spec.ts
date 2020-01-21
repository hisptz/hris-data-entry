import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRecordComponent } from './current-record.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CurrentRecordComponent', () => {
  let component: CurrentRecordComponent;
  let fixture: ComponentFixture<CurrentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRecordComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
