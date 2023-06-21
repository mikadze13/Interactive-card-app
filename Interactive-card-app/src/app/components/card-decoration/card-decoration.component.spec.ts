import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDecorationComponent } from './card-decoration.component';

describe('CardDecorationComponent', () => {
  let component: CardDecorationComponent;
  let fixture: ComponentFixture<CardDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDecorationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
