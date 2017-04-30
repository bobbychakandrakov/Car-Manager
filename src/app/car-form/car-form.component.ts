import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../car';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  car = new Car();
  fuelTypes = ['Petrol', 'Diesel', 'Electric' ];
  transmissions = ['Manual', 'Automatic', 'Semi-Automatic'];

  constructor(private router: Router,
              private carService: CarDataService) { }

  ngOnInit() {
  }

  submit(e,form){
    e.preventDefault();

    if (form.valid){
      this.carService.addCar(this.car);
      this.router.navigateByUrl('/');
    }
  }
}
