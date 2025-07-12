import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  imports: [AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cd-demo';
}
