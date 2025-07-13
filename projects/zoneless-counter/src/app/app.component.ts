import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ZonelessFooterComponent, ZonelessHeaderComponent } from '@zoneless/shared';
@Component({
  selector: 'app-root',
  imports: [CounterComponent, ZonelessFooterComponent, ZonelessHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zoneless-counter';
}
