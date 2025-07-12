import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-h',
  imports: [],
  templateUrl: './h.component.html',
  styleUrl: './h.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HComponent {
  logComponent() {
    console.log('H');
    // return 'H'
  }

  dummyClick() {
    console.log('Dummy click H');
  }
}
