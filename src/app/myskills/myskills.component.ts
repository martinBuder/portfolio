import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
  @Input() skills = [
    'angular', 'typescript', 'javascript', 'html', 'css', 'firebase', 'git', 'scrum', 'api', 'materialdesign',
  ]
}
