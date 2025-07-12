import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public count: number = 0;

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    if (this.count > 0) this.count -= 1;
  }

  ngDoCheck() {
    console.log('Running check in counter');
  }
}
