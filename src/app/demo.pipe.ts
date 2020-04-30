import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: string, gender: string ): string {
    if (gender.toLowerCase() == 'male') {
      return 'Mr.' + ' '+ value;
    } else {
      return 'Ms.' + ' ' + value;
    }
  }
}
