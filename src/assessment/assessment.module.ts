import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from "@angular/forms";
import { AssessmentTagComponent } from "./container/assessment.component";

import { AssessmentComponent } from './components/assessment/assessment.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';

import { AssessmentEffects } from "../store/effects/assessmentEffects";
import * as assessments from "../store/reducers/assessmentReducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('assessments', assessments.reducer),
    EffectsModule.forFeature([AssessmentEffects]),
    ReactiveFormsModule
  ],
  declarations: [
    AssessmentComponent,
    AssessmentsComponent,
    AssessmentTagComponent
  ],
  exports: [
    AssessmentComponent,
    AssessmentsComponent,
    AssessmentTagComponent
  ]
})
export class AssessmentModule { }
