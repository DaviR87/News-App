import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() hlColor = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.changeTheColor('violet');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeTheColor('blue');
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
  }

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.hlColor;
  }
    

  private changeTheColor(color: string) {
   this.el.nativeElement.style.backgroundColor = color;
  }
    

}
