import { Component } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent {
  subline = [
    'The web is your stage.',
		'Code is your brush.',
		'Design your stage!'
  ]
}
