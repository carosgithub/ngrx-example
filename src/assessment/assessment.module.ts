import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AssessmentTagComponent } from "./component/assessment.component";

@NgModule({
  imports: [
    ReactiveFormsModule
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
