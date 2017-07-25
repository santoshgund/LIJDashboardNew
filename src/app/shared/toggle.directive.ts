import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

@HostBinding('class.active') isActive=true;

@HostListener('click')togleClass(){
  this.isActive=!this.isActive;
}

  constructor() { }

}
