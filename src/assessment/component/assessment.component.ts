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
//import { Todo } from 'app/todo/models/todo';
import { Todo } from "../todo/models/todo";

//import * as todo from 'app/todo/actions/todo';
//import * as fromTodos from 'app/todo/reducers/todos';
import * as todo from '../todo/actions/todo';
import * as fromTodos from '../todo/reducers/todos';

@Component({
  selector: 'assessment-tag',
  template: `
    <div class="container">

        <div class="row">
          <div class="col-md-12 text-center">
              <h1>My Todo App</h1>
              <p>Just a simple todo app created using ngrx</p>
          </div>
        </div>

        <div class="row">

          <div class="col-md-3">
            <h5>Todo:</h5>

            <form (submit)="onSubmit(form)" [formGroup]="form">
                <input type="hidden" class="form-control" id="id" formControlName="id"/>
                <input type="hidden" class="form-control" id="complete" formControlName="complete"/>
                <div class="form-group">
                  <input type="text" class="form-control" id="task" placeholder="task name" formControlName="task"/>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Save</button>
            </form>

          </div>

          <div class="col-md-9">
            <app-todos [data]="todos | async"></app-todos>
          </div>

        </div>

        </div>

  `
})
export class AssessmentTagComponent implements OnInit {

  /**
   * Observable list of todo
   */
  todos: Observable<Todo[]>;

  /**
   * Reactive form
   */
  form: FormGroup;

  constructor(
    private store: Store<fromTodos.State>,
    private formBuilder: FormBuilder
  ) {
    this.todos = store.select(fromTodos.getTodosAll);
  }

  ngOnInit() {
    // crate reactive form
    this.form = this.formBuilder.group({
      id: [''],
      task: ['', Validators.required],
      complete: ['']
    });

    // subscribe to receive selected todo
    this.store.select(fromTodos.getSelectedTodo).subscribe(todo => {
      if (!todo) return;

      this.form.setValue(todo);
    });
  }

  /**
   * Submit the form
   * @param { value, valid }: { value: Todo, valid: boolean }
   */
  onSubmit({value, valid}: {value: Todo, valid: boolean}): void {
    if (valid) {
      // dispatch new action
      this.store.dispatch(new todo.Save(value));
      this.form.reset();
    }
  }

}
