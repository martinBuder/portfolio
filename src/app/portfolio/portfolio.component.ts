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
      description: 'A simple Jump-and-Run game based on an object-oriented apporach. Help sharkie to find Coins and Poisens to fight against enemies and the final killer whale.',
      codeElements: 'JavaScript(OOP) | HTML | CSS',
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
