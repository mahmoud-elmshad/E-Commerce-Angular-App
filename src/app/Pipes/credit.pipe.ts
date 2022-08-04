import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {
  credit!:string
// String???
  transform(value: string,): string {
let x1=value.substring(0,4)
let x2=value.substring(4,8)
let x3=value.substring(8,12)
let x4=value.substring(12,16)
this.credit=`${x1}-${x2}-${x3}-${x4}`
    return this.credit;
  }

}
