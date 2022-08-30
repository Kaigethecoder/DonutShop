import { TestBed } from '@angular/core/testing';


import { DonutShopService } from './donut-shop.service';

describe('DonutShopService', () => {
  let service: DonutShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
