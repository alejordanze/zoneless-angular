import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { FooterComponent, HeaderComponent } from '@zoneless/shared';
@Component({
  selector: 'app-root',
  imports: [SearchComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'livesearch';
}
