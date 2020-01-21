import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from 'src/app/store/store.effects';
import { metaReducers, reducers } from 'src/app/store/store.reducer';

import { RecordsComponent } from './records.component';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
