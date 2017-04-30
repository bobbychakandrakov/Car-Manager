import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(items: any[], filter: number): any {
      let count = 0;
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => {
          count++;
          return count <= filter;
        });
    }

}
