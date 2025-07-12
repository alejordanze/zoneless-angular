import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[flash]'
})
export class FlashDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngDoCheck() {
    const nativeEl = this.el.nativeElement as HTMLElement;
    // nativeEl.style.backgroundColor = '#ffd54f'; // yellow
    this.renderer.removeClass(nativeEl, 'flash-cd');

    // Force reflow to reset the animation
    void nativeEl.offsetWidth;

    // Re-add the animation class
    this.renderer.addClass(nativeEl, 'flash-cd');
  }

}
