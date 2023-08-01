import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  templateUrl: './cursor-circle.component.html',
  styleUrls: ['./cursor-circle.component.scss']
})
export class CursorCircleComponent {
  posX: number = 0;
  posY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.posX = event.clientX;
    this.posY = event.clientY;
  }
}
