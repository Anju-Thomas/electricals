import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  isLinear=false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  value: number = 105;
  highValue: number = 1410;
  options: Options = {
    floor: 105,
    ceil: 1410
  };
}
