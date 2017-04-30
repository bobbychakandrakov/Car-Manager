import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarDataService } from '../car-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  closeResult: string;
  cars: Car[];
  page: number = 1;
  hide: boolean = false;

  constructor(private carService: CarDataService, private modalService: NgbModal) { 
    
  }

  open(content, id) {
    this.modalService.open(content).result.then((result) => {
      if (result == 'Confirm click'){
        this.carService.removeCar(id);
        this.cars = this.carService.getAll();
        if(this.cars.length == 0){
          this.hide = false;
        }
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.cars = this.carService.getAll() || [];
    if(this.cars.length > 0){
      this.hide = true;
    }
  }

}
