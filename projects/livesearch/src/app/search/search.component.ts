import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { COUNTRIES } from '@zoneless/shared';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public countries = COUNTRIES;
  public countriesBackup = [...COUNTRIES];
  public search: string = '';

  updateList() {
    this.countries = this.countriesBackup.filter((country) => 
      country.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  ngDoCheck() {
    console.log('Running check in search');
  }
}
