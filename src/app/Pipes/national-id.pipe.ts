import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {
dateday!:string
datemonth!:string
dateyear!:string
date!:Date
str!:string
  transform(value: number,): Date {
    // this.date=Array.from(`${value}`)
    this.str=value.toString()
    this.dateday=this.str.substring(5,7)
    this.datemonth=this.str.substring(3,5)
    this.dateyear=this.str.substring(1,3)
    this.date=new Date(parseInt(19+this.dateyear),parseInt(this.datemonth)-1,parseInt(this.dateday))
    // console.log(this.date)

    return this.date ;
  }

}
