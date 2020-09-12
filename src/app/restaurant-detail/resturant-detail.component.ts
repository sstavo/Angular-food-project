import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../core/resturant.service';

@Component({
  selector: 'fapp-restaurant-detail',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.css'],
})
export class ResturantDetailComponent implements OnInit {
  public restaurant: any;
  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRestaurant();
    alert('im alive');
  }

  getRestaurant() {
    let slug = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurant = this.restaurantService.getRestaurant(slug);
  }
  ngOnDestroy() {
    alert(" 'i'm dying");
  }
}
