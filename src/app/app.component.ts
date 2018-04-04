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
      'Costco (just the free samples)'
      'Costco Food Court',
      'Eat Thai',
      'El Toro',
      'Firehouse',
      'Five Guys',
      'Flamme Burger',
      'Grilliant',
      'Happy Kitchen',
      'Hotcakes',
      'Jimmy John\'s',
      'Kazan',
      'McAllister\'s',
      'Midday Deli',
      'Noodles, Inc.',
      'Panera',
      'Philly Steak',
      'Qdoba',
      'Squealer\'s'
      'Sub 16',
      'Subway',
      'Taco Bell',
      'Ted\'s Montana Grill',
      'Thai Select',
      'Thai'
      'Yats'
    ];

    this.selectedPlace = 'Click the button';
  }

  findPlace(): void {
    this.selectedPlace = this.randomPlace();
  }

  randomPlace(): string {
    let places = this.places;
    if (this.noThai) {
      places = places.filter(place => !place.includes('Thai'));
    }
    return places[Math.floor(Math.random() * places.length)];
  }
}
