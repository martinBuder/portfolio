import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  status: boolean = false;
  menuList = [
    { 
      link: 'about',
      linkText: 'About me' 
    },
    { 
      link: 'skills',
      linkText: 'My skills' 
    },
    { 
      link: 'portfolio',
      linkText: 'Portfolio' 
    },
  ];

  openMenu(){
    this.status = !this.status;       
  }

  closeMenu(i: number){
    let customBorder = document.getElementsByClassName('customBorder')[i];
    customBorder.classList.add('fullBorder');
    
    setTimeout(() => {
      this.status = !this.status
    }, 300);
    
    customBorder.classList.remove('fullBorder');
  }
}
