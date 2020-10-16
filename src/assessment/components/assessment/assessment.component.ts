import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Assessment } from "../../../models/assessment";

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentComponent {

  /**
   * Receive the assessment
   */
  @Input() assessment: Assessment;

}
