import { Injectable } from '@angular/core';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FormModel } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

import { addForms, handleLoadFormsError, loadForms } from './form.actions';

@Injectable()
export class FormEffects implements OnInitEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadForms),
      switchMap(() =>
        this.formService.findAll().pipe(
          map((forms: FormModel[]) => addForms({ forms })),
          catchError((error: ErrorMessage) =>
            of(handleLoadFormsError({ error }))
          )
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return loadForms();
  }

  constructor(private actions$: Actions, private formService: FormService) {}
}
