import { Component, OnInit } from '@angular/core';
import { dummyResturants } from '../restaurant';

@Component({
  selector: 'fapp-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  public restaurants: any[] = [];

  constructor() {} /*  */

  ngOnInit(): void {
    this.restaurants = dummyResturants;
    console.log(this.restaurants);
  }
}
