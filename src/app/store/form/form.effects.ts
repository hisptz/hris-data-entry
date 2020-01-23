import { Injectable } from '@angular/core';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FormModel } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

import { addForms, handleLoadFormsError, loadForms } from './form.actions';
import { sanitizeFormList } from 'src/app/helpers/sanitize-form-list.helper';

@Injectable()
export class FormEffects implements OnInitEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadForms),
      switchMap(() =>
        this.formService.findAll({ paging: false }).pipe(
          map((formResponse: any) =>
            addForms({ forms: sanitizeFormList(formResponse) })
          ),
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
