import { Injectable } from '@angular/core';
import { Car } from './car';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class CarDataService {
  private cars: Car[];

  constructor(private localStorageService:LocalStorageService) {
    this.cars = JSON.parse(this.localStorageService.get('cars') + '') || [];
  }

  addCar(car: Car): void{
    this.cars.push(car);
    this.localStorageService.set('cars', JSON.stringify(this.cars));
  }

  getAll(): Car[]{
    return this.cars || [];
  }

  getCar(id: number): Car{
    let selectedCar: Car;
    for(let i = 0 ; i < this.cars.length; i++){
      if (this.cars[i].id == id){
        selectedCar = this.cars[i];
        break;
      }
    }
    return selectedCar || null;
  }

  removeCar(id: number): void{
    for(let i = 0 ; i < this.cars.length; i++){
      if (this.cars[i].id == id){
        this.cars.splice(i,1);
        this.localStorageService.set('cars', JSON.stringify(this.cars));
        break;
      }
    }
  }

  updateCar(id: number, car: Car): void{
    for(let i = 0 ; i < this.cars.length; i++){
      if (this.cars[i].id == id){
        this.cars[i] = car;
        this.localStorageService.set('cars', JSON.stringify(this.cars));
        break;
      }
    }
  }
}
