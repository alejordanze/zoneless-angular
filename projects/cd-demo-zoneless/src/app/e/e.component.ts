import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-e',
  imports: [],
  templateUrl: './e.component.html',
  styleUrl: './e.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EComponent {
  logComponent() {
    console.log('E');
    // return 'E'
  }
}
