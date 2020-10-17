import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as fromActions from '../actions/assessment.actions';

@Injectable()
export class AssessmentEffects {

  constructor(
    private actions$: Actions
  ) {}


  @Effect()
  $load = this.actions$.pipe(
      ofType(fromActions.LOAD_QRTP),
      switchMap(() => {
          return this.assessmentService
        })
      );



}
