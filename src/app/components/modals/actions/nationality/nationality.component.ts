import { Component } from '@angular/core';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrl: './nationality.component.css'
})
export class NationalityComponent {
  nationalities: string[] = []; // Dropdown options for nationalities

  constructor () {}

  ngOnInit(): void {
    this.nationalities = this.getNationalities();
    console.log("Nationalities", this.nationalities);
  }

  getNationalities(): string[] {
    return ['Russian', 'Ukranian', 'German', 'French', 'Argentinian', 'Dutch', 'Norwegian', 'Swedish', 'Turkish', 'Spanish', 'British', 'Polish'];
  }
}
