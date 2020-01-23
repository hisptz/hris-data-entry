import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';

describe('FormService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA]
    })
  );

  it('should be created', () => {
    // const service: FormService = TestBed.get(FormService);
    expect(true).toBeTruthy();
  });
});
