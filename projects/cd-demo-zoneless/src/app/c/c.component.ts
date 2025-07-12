import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EComponent } from '../e/e.component';
import { FComponent } from '../f/f.component';

@Component({
  selector: 'app-c',
  imports: [EComponent, FComponent],
  templateUrl: './c.component.html',
  styleUrl: './c.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent {
  logComponent() {
    console.log('C');
    // return 'C'
  }
}
