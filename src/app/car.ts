export class Car {
    id:number;
    brant:string;
    model:string;
    description?:string;
    registration_number:any;
    fuelType:string;
    transmission:string;

    private date = new Date();
    
    constructor(){
        this.id = this.guid();
    }

    private guid():number{
        var components = [
          this.date.getFullYear(),
          this.date.getMonth(),
          this.date.getDate(),
          this.date.getHours(),
          this.date.getMinutes(),
          this.date.getSeconds(),
          this.date.getMilliseconds()
      ];
      return parseInt(components.join(""));
    }
}
