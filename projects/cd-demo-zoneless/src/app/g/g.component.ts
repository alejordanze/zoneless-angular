import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-g',
  imports: [],
  templateUrl: './g.component.html',
  styleUrl: './g.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GComponent {
  logComponent() {
    console.log('G');
    // return 'G'
  }
}
