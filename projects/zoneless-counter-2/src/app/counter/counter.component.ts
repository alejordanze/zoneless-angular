import { ChangeDetectionStrategy, Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  public count = signal(0);

  increment(): void {
    this.count.update((c) => c + 1);
  }

  decrement(): void {
    if (this.count() > 0) this.count.update((c) => c - 1);
  }

  ngDoCheck() {
    console.log('Running check in counter');
  }
}
