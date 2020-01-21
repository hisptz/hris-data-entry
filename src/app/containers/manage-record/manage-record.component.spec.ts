import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ManageRecordComponent } from './manage-record.component';

describe('ManageRecordComponent', () => {
  let component: ManageRecordComponent;
  let fixture: ComponentFixture<ManageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRecordComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
