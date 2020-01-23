import { Injectable } from '@angular/core';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import {
  Actions,
  createEffect,
  ofType,
  OnInitEffects,
  act
} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FormModel } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

import {
  addForms,
  handleLoadFormsError,
  loadForms,
  setCurrentForm
} from './form.actions';
import { sanitizeFormList } from 'src/app/helpers/sanitize-form-list.helper';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { setCurrentRecord } from '../record/record.actions';
import { Store } from '@ngrx/store';
import { State } from '../store.reducer';

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

  routerNavigation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        tap((action: any) => {
          const { payload } = action;
          const splitedRouterUrl = (payload && payload.routerState
            ? payload.routerState.url
            : ''
          ).split('/');

          if (
            splitedRouterUrl.indexOf('form') !== -1 &&
            splitedRouterUrl.indexOf('record') !== -1
          ) {
            this.store.dispatch(
              setCurrentForm({ currentFormId: splitedRouterUrl[2] })
            );
            this.store.dispatch(
              setCurrentRecord({ currentRecordId: splitedRouterUrl[4] })
            );
          }
        })
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects() {
    return loadForms();
  }

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private formService: FormService
  ) {}
}
