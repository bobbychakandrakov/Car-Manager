import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Car } from '../car';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  car: Car;
  id: number;
  sub: any;
  fuelTypes = ['Petrol', 'Diesel', 'Electric' ];
  transmissions = ['Manual', 'Automatic', 'Semi-Automatic'];

  constructor(private carService: CarDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.car = this.carService.getCar(this.id);
    });
  }

  submit(e,form){
    e.preventDefault();

    if (form.valid){
      this.carService.updateCar(this.id,this.car);
      this.router.navigateByUrl('/');
    }
  }

}
