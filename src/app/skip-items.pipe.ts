import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skipItems',
  pure:false
})
export class SkipItemsPipe implements PipeTransform {

  transform(items: any[], step: number): any {
        let count = 0;
        if  (step == 0){
          return items;
        }
        return items.filter(item => {
          count++;
          return count >= step;
        });
    }

}
