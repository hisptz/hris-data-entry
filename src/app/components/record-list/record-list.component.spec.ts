import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordListComponent } from './record-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RecordListComponent', () => {
  let component: RecordListComponent;
  let fixture: ComponentFixture<RecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
