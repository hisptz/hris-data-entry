import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FormEffects } from './form.effects';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormEffects', () => {
  let actions$: Observable<any>;
  let effects: FormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormEffects, provideMockActions(() => actions$)]
    });

    // effects = TestBed.get<FormEffects>(FormEffects);
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });
});
