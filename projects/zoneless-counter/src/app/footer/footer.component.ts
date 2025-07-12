import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { FlashDirective } from '../shared/directives/flash.directive';

@Component({
  selector: 'app-footer',
  imports: [FlashDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public version = VERSION;

  logComponent() {
    console.log('Running check in footer');
  }
}
