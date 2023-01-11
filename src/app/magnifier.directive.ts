import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
// increase the size of an image when it is hovere over
export class MagnifierDirective {
  //binds to the width of the host element
  @HostBinding('width') width = 200;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e:any){
    this.width = 300;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e:any){
    this.width = 200;
  }

  constructor() { }

}
