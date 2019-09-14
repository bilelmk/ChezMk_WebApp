import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringCarouselComponent } from './catering-carousel.component';

describe('CateringCarouselComponent', () => {
  let component: CateringCarouselComponent;
  let fixture: ComponentFixture<CateringCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
