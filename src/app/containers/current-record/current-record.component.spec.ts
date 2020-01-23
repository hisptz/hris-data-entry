import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRecordComponent } from './current-record.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterByPipe } from 'src/app/pipes/filter-by.pipe';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from 'src/app/store/store.effects';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import { RouterTestingModule } from '@angular/router/testing';

describe('CurrentRecordComponent', () => {
  let component: CurrentRecordComponent;
  let fixture: ComponentFixture<CurrentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRecordComponent, FilterByPipe],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule,
        NgxDhis2HttpClientModule.forRoot({
          version: 1,
          namespace: 'hris',
          models: {}
        }),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects)
      ]
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
