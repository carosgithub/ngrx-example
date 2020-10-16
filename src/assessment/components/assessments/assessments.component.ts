import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Assessment } from "../../../models/assessment";
import * as fromActions from '../../../store/actions/assessmentActions'
import * as fromReducers from '../../../store/reducers/assessmentReducers';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentsComponent {

  /**
   * receive list of assessment's
   */
  @Input() data: Assessment[];

  constructor(
    private store: Store<fromReducers.State>
  ) {}

  /**
   * Dispatch a Complete action to change the assessment status
   * @param id number
   */
  changeStatus(id: number) {
    this.store.dispatch(new fromActions.Complete(id));
  }

  /**
   * Dispatch a Select action to change the selectedAssessmentId
   * This change will reflect on the selector 'getSelectedAssessment' that
   * we created on reducers folder.
   * @param id number
   */
  edit(id: number) {
    this.store.dispatch(new fromActions.Select(id));
  }

  /**
   * Dispatch a Delete action to remove a entity from the state
   * @param id number
   */
  delete(id: number) {
    this.store.dispatch(new fromActions.Delete(id));
  }

}
