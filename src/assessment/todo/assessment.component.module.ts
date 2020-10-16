import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';

import { TodoEffects } from "../../store/effects/todos";
import * as todos from "../../store/reducers/todos";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', todos.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [
    TodoComponent,
    TodosComponent
  ],
  exports: [
    TodoComponent,
    TodosComponent
  ]
})
export class AssessmentComponentModule { }