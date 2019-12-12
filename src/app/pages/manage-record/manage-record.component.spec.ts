import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecordComponent } from './manage-record.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

describe('ManageRecordComponent', () => {
  let component: ManageRecordComponent;
  let fixture: ComponentFixture<ManageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRecordComponent],
      imports: [
        RouterTestingModule,
        MatNativeDateModule,
        SharedModule,
        BrowserAnimationsModule
      ]
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
