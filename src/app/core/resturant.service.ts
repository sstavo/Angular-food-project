import { Injectable } from '@angular/core';
import { dummyResturants } from '../restaurant/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  getRestaurants() {
    return dummyResturants;
  }

  getRestaurant(slug: string) {
    let restaurants = dummyResturants;
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].slug === slug) {
        return restaurants[i];
      }
    }
    return '{ code: "404", message: "Resource not found"}';
  }
}
