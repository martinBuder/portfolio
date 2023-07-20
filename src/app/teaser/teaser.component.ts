import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {
  subline = [
    'The web is your stage.',
		'Code is your brush.',
		'Design your stage!',
    '',
  ];
    currentSub = 0;
    showSubline = true;

    ngOnInit() {
      this.updateImage();
    }
  
    updateImage() {
      setInterval(() => {
        this.currentSub++;
        this.currentSub = this.currentSub % this.subline.length;
        this.showSubline = false;
        setTimeout(() => {
          this.showSubline = true;
        }, 10);
      }, 5000)
    }
}
