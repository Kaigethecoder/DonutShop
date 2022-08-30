import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdisplayComponent } from './cartdisplay.component';

describe('CartdisplayComponent', () => {
  let component: CartdisplayComponent;
  let fixture: ComponentFixture<CartdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
