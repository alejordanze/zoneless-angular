import { Component } from '@angular/core';
import { GComponent } from '../g/g.component';
import { HComponent } from '../h/h.component';

@Component({
  selector: 'app-d',
  imports: [GComponent, HComponent],
  templateUrl: './d.component.html',
  styleUrl: './d.component.scss'
})
export class DComponent {
  logComponent() {
    console.log('D');
    // return 'D'
  }
}
