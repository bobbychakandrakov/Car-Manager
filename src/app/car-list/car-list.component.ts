import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carService: CarDataService) { }

  ngOnInit() {
    console.log(this.carService.getAll());
  }

}
