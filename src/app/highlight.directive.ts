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

  @HostListener('mouseenter', ['$event']) mouseover(event) {
    this.backgroundColor = 'green';
    console.log(event.target);
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event) {
    this.backgroundColor = 'white';
    console.log(event.target);
  }

}
