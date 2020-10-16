import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AssessmentTagComponent } from "./container/assessment.component";
import { AssessmentComponentModule } from './todo/assessment.component.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AssessmentComponentModule,
  ],
  declarations: [
    AssessmentTagComponent
  ],
  providers: [],
  exports: [
    AssessmentTagComponent
  ]
})
export class AssessmentModule {}
