import { FlashDirective } from '../../directives/flash.directive';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zoneless-header',
  imports: [FlashDirective],
  templateUrl: './zoneless-header.component.html',
  styleUrl: './zoneless-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessHeaderComponent {
  @Input('title') title: string = 'Header';

  logComponent() {
    console.log('Running check in header');
  }
}
