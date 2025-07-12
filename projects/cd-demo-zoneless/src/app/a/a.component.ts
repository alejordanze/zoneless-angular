import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-a',
  imports: [CComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
  logComponent() {
    console.log('A');
    return 'A'
  }

  dummyClick() {
    console.log('Dummy click A');
  }
}
