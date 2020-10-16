import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from "@angular/forms";
import { AssessmentTagComponent } from "./container/assessment.component";

import { AssessmentComponent } from './components/assessment/assessment.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';

import { AssessmentEffects } from "../store/effects/todos";
import * as todos from "../store/reducers/todos";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', todos.reducer),
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
