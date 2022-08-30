import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutdetailsComponent } from './donutdetails.component';

describe('DonutdetailsComponent', () => {
  let component: DonutdetailsComponent;
  let fixture: ComponentFixture<DonutdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
