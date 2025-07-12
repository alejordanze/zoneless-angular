import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search/search.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, SearchComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'livesearch';
}
