import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dump'
})
export class DumpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return null;
  }

}
