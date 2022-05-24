import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
  transform(value: any, culture: string): any {
    let val = '';
    switch(culture) {
      case 'vi': {
        val = '84';
        break;
      }
      default: break
    }
    return `+${val} ${value}`;
  }

}
