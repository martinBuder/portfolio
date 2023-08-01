import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorCircleComponent } from './cursor-circle.component';

describe('CursorCircleComponent', () => {
  let component: CursorCircleComponent;
  let fixture: ComponentFixture<CursorCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursorCircleComponent]
    });
    fixture = TestBed.createComponent(CursorCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
