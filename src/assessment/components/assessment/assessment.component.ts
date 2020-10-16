import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Assessment } from "../../../models/assessment";

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
  @Input() todo: Assessment;

}
