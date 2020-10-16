import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Assessment } from "../../models/assessment";
import * as fromActions from '../../store/actions/assessmentActions'
import * as fromReducers from '../../store/reducers/assessmentReducers';
import * as fromSelectors from '../../store/selectors/assessment.selectors'

@Component({
  selector: 'assessment-tag',
  template: `
    <div class="container">

        <div class="row">
          <div class="col-md-12 text-center">
              <h1>My Assessment App</h1>
              <p>Just a simple assessment app created using ngrx</p>
          </div>
        </div>

        <div class="row">

          <div class="col-md-3">
            <h5>New Assessment:</h5>

            <form (submit)="onSubmit(form)" [formGroup]="form">
                <input type="hidden" class="form-control" id="id" formControlName="id"/>
                <input type="hidden" class="form-control" id="complete" formControlName="complete"/>
                <div class="form-group">
                  <input type="text" class="form-control" id="caseName" placeholder="Case name" formControlName="caseName"/>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Save</button>
            </form>

          </div>

          <div class="col-md-9">
            <app-assessments [data]="assessments$ | async"></app-assessments>
          </div>

        </div>

        </div>

  `
})
export class AssessmentTagComponent implements OnInit {

  /**
   * Observable list of assessment
   */
  assessments$: Observable<Assessment[]>;

  /**
   * Reactive form
   */
  form: FormGroup;

  constructor(
    private store: Store<fromReducers.State>,
    private formBuilder: FormBuilder
  ) {
    this.assessments$ = store.select(fromSelectors.getAssessmentsAll);
  }

  ngOnInit() {
    // crate reactive form
    this.form = this.formBuilder.group({
      id: [''],
      caseName: ['', Validators.required],
      complete: ['']
    });

    // subscribe to receive selected assessment
    this.store.select(fromSelectors.getSelectedAssessment).subscribe(assessment => {
      if (!assessment) return;

      this.form.setValue(assessment);
    });
  }

  /**
   * Submit the form
   * @param { value, valid }: { value: Assessment, valid: boolean }
   */
  onSubmit({value, valid}: {value: Assessment, valid: boolean}): void {
    if (valid) {
      // dispatch new action
      this.store.dispatch(new fromActions.Save(value));
      this.form.reset();
    }
  }

}
