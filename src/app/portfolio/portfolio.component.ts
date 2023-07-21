import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      img: 'sharkiegame',
      weblink: '',
      title: 'Sharkie',
      description: 'string',
      codeElements: 'string',
      githubLink: 'string',
    },
    {
      img: 'sharkiegame',
      weblink: '',
      title: 'Sharkie',
      description: 'string',
      codeElements: 'string',
      githubLink: 'string',
    },
  ]
}
