import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'fapp-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnDestroy, OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("i'm coming to life");
  }
  ngOnDestroy() {
    console.log(" 'i'm dying");
  }
}
