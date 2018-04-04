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
      'Qdoba',
      'Firehouse',
      'Yats',
      'Five Guys',
      'Subway',
      'Thai'
    ];

    this.selectedPlace = 'Click the button';
  }

  findPlace(): void {
    let place = this.randomPlace();
    if (this.noThai && place === 'Thai') {
      this.findPlace();
      return;
    }
    this.selectedPlace = place;
  }

  randomPlace(): string {
    return this.places[Math.floor(Math.random() * this.places.length)];
  }
}
