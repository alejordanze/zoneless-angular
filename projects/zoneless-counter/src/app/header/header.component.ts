import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlashDirective } from '../shared/directives/flash.directive';

@Component({
  selector: 'app-header',
  imports: [FlashDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  logComponent() {
    console.log('Running check in footer');
  }
}
