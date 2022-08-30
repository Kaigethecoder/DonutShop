import { Component, OnInit } from '@angular/core';
import { DonutShopService, Donut, DonutApiResponse } from '../donut-shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit
{
  constructor(private myDonutShopService: DonutShopService) { }
  public donutList: Donut[] = [];

  async ngOnInit(): Promise<void> {
    this.donutList = await this.myDonutShopService.getDonutList();
  }
}
