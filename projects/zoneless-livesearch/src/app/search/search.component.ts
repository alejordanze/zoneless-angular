import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { COUNTRIES } from '@zoneless/shared'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  public countriesBackup = signal([...COUNTRIES]);
  public search = signal('');
  public countries = computed(() => {
    const term = this.search().toLowerCase();
    return this.countriesBackup().filter(c =>
      c.name.toLowerCase().includes(term)
    );
  });

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.set(input.value);
  }

  ngDoCheck() {
    console.log('Running check in search');
  }
}
