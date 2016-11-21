import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green'; // This way sometimes fails, due to running in different environments
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green'); // Better way
  }

  @Input() defaultColor = 'white';
  private backgroundColor: string;

  @Input('dirHighlight') highlightColor = 'green'; // Alias saves us writing both [dirHighlight] and [highlightcolor]

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
