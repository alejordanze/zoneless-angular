import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-f',
  imports: [],
  templateUrl: './f.component.html',
  styleUrl: './f.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FComponent {
  logComponent() {
    console.log('F');
    // return 'F'
  }

  dummyClick() {
    console.log('Dummy click F');
  }
}
