import { Component, Input } from '@angular/core';
import { FlashDirective } from '../../directives/flash.directive';

@Component({
  selector: 'lib-header',
  imports: [FlashDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = "Header";

  logComponent() {
    console.log('Running check in header');
  }
}
