import { ChangeDetectorRef, Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { VERSION } from '@angular/core';
import { FlashDirective } from '../shared/directives/flash.directive';

@Component({
  selector: 'app-footer',
  imports: [FlashDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public version = VERSION;
  private el = inject(ElementRef)
  private renderer = inject(Renderer2)

  logComponent() {
    console.log('Running check in footer');
    // this.bgColor = 'touched';

    // setTimeout(() => {
    //   this.bgColor = 'default';
    //   this.cdr.markForCheck();
    // }, 100);


    // const nativeEl = this.el.nativeElement as HTMLElement;
    // // nativeEl.style.backgroundColor = '#ffd54f'; // yellow
    // this.renderer.removeClass(nativeEl, 'flash-cd');

    // // Force reflow to reset the animation
    // void nativeEl.offsetWidth;

    // // Re-add the animation class
    // this.renderer.addClass(nativeEl, 'flash-cd');
  }
}
