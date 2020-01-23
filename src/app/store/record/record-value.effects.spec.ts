import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RecordValueEffects } from './record-value.effects';

describe('RecordValueEffects', () => {
  let actions$: Observable<any>;
  let effects: RecordValueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecordValueEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RecordValueEffects>(RecordValueEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
