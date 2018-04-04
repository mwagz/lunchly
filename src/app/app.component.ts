import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any[];
  noThai: boolean;
  selectedPlace: string;

  constructor() {
    this.places = [
      'Bubs',
      'Chipotle',
      'Eat Thai',
      'Firehouse',
      'Five Guys',
      'Flamme Burger',
      'Grilliant',
      'Hotcakes',
      'Midday Deli',
      'Panera',
      'Philly Steak',
      'Qdoba',
      'Sub 16',
      'Subway',
      'Taco Bell',
      'Thai Select',
      'Yats'
    ];

    this.selectedPlace = 'Click the button';
  }

  findPlace(): void {
    let place = this.randomPlace();
    if (this.noThai && place.includes('Thai')) {
      this.findPlace();
      return;
    }
    this.selectedPlace = place;
  }

  randomPlace(): string {
    return this.places[Math.floor(Math.random() * this.places.length)];
  }
}
