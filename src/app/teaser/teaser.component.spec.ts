import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserComponent } from './teaser.component';

describe('TeaserComponent', () => {
  let component: TeaserComponent;
  let fixture: ComponentFixture<TeaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaserComponent]
    });
    fixture = TestBed.createComponent(TeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
