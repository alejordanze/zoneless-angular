import { Component } from '@angular/core';
import { DComponent } from '../d/d.component';

@Component({
  selector: 'app-b',
  imports: [DComponent],
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss'
})
export class BComponent {
  logComponent() {
    console.log('B');
    return 'B'
  }

  dummyClick() {
    console.log('Dummy click B');
  }
}
