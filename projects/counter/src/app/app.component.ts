import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent, FooterComponent } from '@zoneless/shared';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter';
}
