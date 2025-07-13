import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ZonelessHeaderComponent, ZonelessFooterComponent} from '@zoneless/shared'

@Component({
  selector: 'app-root',
  imports: [ZonelessFooterComponent, SearchComponent, ZonelessHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'zoneless-livesearch';
}
