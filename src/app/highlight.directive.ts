import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green'; // This way sometimes fails, due to running in different environments
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green'); // Better way
  }

  private backgroundColor = 'white';

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }

}
