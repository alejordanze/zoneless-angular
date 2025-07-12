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

  logComponent() {
    console.log('Running check in footer');
  }
}
