import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AssessmentTagComponent } from "./container/assessment.component";
import { TodoModule } from './todo/todo.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoModule,
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
