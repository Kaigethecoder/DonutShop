import { Component, OnInit } from '@angular/core';
import { DonutShopService, Donut, DonutApiResponse , Cart } from '../donut-shop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donutdetails',
  templateUrl: './donutdetails.component.html',
  styleUrls: ['./donutdetails.component.css']
})
export class DonutdetailsComponent implements OnInit {
  public id: number = 0;
  

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private donutShopService: DonutShopService  ) { }

  public ourDonut: Donut | any = null;
  public donutCart: Cart = new Cart();

  async ngOnInit(): Promise<void> {
    let thisComponent: DonutdetailsComponent = this;
    let thisString: string | null = "";
    thisString = thisComponent._Activatedroute.snapshot.paramMap.get("id");
    thisComponent.id = Number.parseInt(thisString!);

    thisComponent.ourDonut = await thisComponent.donutShopService.getDonutDetails(thisComponent.id);
  }
  public async addDonutToCart(id: number): Promise<void> {
    await this.donutShopService.addDonutToCart(id);
    console.log("donut added")
    window.alert('Your donut has been added!  ' + this.donutShopService.donutCart.items.length);
  }


}
