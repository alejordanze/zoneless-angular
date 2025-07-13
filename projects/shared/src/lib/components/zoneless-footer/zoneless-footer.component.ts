import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { FlashDirective } from '../../directives/flash.directive';

@Component({
  selector: 'zoneless-footer',
  imports: [FlashDirective],
  templateUrl: './zoneless-footer.component.html',
  styleUrl: './zoneless-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessFooterComponent {
  public version = VERSION;

  logComponent() {
    console.log('Running check in footer');
  }
}
