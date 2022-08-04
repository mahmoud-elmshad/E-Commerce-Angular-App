import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BorderBoxDirective } from './../../../../Day-02/Frontend-Sohag-2022-master/src/app/Directives/border-box.directive';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {
@Input('appProductCard') color:string=''

  constructor(private x:ElementRef) {
    x.nativeElement.style.boxShadow=``;
    x.nativeElement.style.border=``;
    x.nativeElement.style.borderRadius=``;
  }
  @HostListener ('mouseover') over(){
    this.x.nativeElement.style.boxShadow=`5px 5px`;
    this.x.nativeElement.style.border=`3px solid ${this.color}`;
    this.x.nativeElement.style.borderRadius=`5px`;
  }
  @HostListener ('mouseout') out(){
    this.x.nativeElement.style.boxShadow=``;
    this.x.nativeElement.style.border=``;
    this.x.nativeElement.style.borderRadius=``;
  }

}
