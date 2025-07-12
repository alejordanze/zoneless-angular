import { Component } from '@angular/core';
import { FlashDirective } from '../shared/directives/flash.directive';

@Component({
  selector: 'app-header',
  imports: [FlashDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logComponent() {
    console.log('Running check in header');
  }
}
