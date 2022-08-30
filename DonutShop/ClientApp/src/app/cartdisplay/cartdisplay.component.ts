import { Component, OnInit } from '@angular/core';
import { DonutShopService, Donut, DonutApiResponse, Cart } from '../donut-shop.service';
import { DonutdetailsComponent } from '../donutdetails/donutdetails.component';

@Component({
  selector: 'app-cartdisplay',
  templateUrl: './cartdisplay.component.html',
  styleUrls: ['./cartdisplay.component.css']
})
export class CartdisplayComponent implements OnInit {

  constructor(private myDonutShopService: DonutShopService ) { }

  public thisCart: Donut[] | any = null;

  ngOnInit(): void {
    let newDonut: Donut | any = null;

    this.thisCart = this.myDonutShopService.showCart();
  }

  public getTotalCalories(): number {
    let total: number = 0;
    for (var i = 0; i < this.thisCart.length; i++) {
      total += this.thisCart[i].calories
    }
    return total;
  }
  public removeFromCart(id: number): void {
    for (var i = 0; i < this.thisCart.length; i++) {
      if (this.thisCart[i].id == id) {
        this.thisCart.splice(i, 1);
        break;
      }
    }
    window.alert('Your donut has been removed!');
  }
}
