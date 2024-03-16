import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: number): any {
    const _value = Math.round(Math.sqrt(value))
    return _value;
  }

}
