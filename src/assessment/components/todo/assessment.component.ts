import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Todo } from "../../../models/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentComponent {

  /**
   * Receive the todo
   */
  @Input() todo: Todo;

}
