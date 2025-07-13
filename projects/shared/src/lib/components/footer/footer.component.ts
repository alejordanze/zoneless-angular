import { Component, VERSION } from '@angular/core';
import { FlashDirective } from '../../directives/flash.directive';

@Component({
  selector: 'lib-footer',
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
