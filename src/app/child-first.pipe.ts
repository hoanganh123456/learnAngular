import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'childFirst'
})
export class ChildFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
