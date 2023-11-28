import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      img: 'pokedex',
      weblink: 'https://designyourstage.com/pokedex/',
      title: 'Pokedex',
      description: 'Based on the PokèAPI. A sipmle libary that provides and catalouges pokemon information.',
      codeElements: 'JavaScript | API | HTML | CSS',
      githubLink: 'https://github.com/martinBuder/pokemon',
    },
    {
      img: 'join',
      weblink: 'https://designyourstage.com/Join/',
      title: 'Join',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks usin drag and drop functions, assigns users and categories. Datas saved by using local and remote storage', 
      codeElements: 'JavaScript | HTML | CSS',
      githubLink: 'https://github.com/martinBuder/join',
    },
    {
      img: 'sharkiegame',
      weblink: 'https://designyourstage.com/sharkieGame/',
      title: 'Sharkie',
      description: 'A simple Jump-and-Run game based on an object-oriented apporach. Help sharkie to find Coins and Poisens to fight against enemies and the final killer whale.',
      codeElements: 'JavaScript(OOP) | HTML | CSS',
      githubLink: 'https://github.com/martinBuder/SharpieGame',
    },
    {
      img: 'dabubble',
      weblink: 'https://designyourstage.com/DABubble/',
      title: 'DA Bubble',
      description: 'A chat program that enables users to communicate through personal chats or group channels. Users can register using either email and password or through Google registration.',
      codeElements: `Angular | TypeScript | HTML | SCSS |` + '\n' + `
      Firebase Firestore Database & Authentication`,
      githubLink: 'https://github.com/martinBuder/DA_Bubble',
      inDevelopment: true,
    },
  ] //img = 4/3
}
