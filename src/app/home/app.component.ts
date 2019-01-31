// app.component.ts
import {Component} from '@angular/core';
import {City} from '../shared/model/city.model';
import {CityService} from '../shared/services/city.service';

@Component({
  selector: 'city-app',
  templateUrl: 'app.html'
})

// Class met properties, array met cities
export class AppComponent {
  // Properties
  cities: City[];

  // constructor
  constructor(private cityService: CityService) {
  }

  // init
  ngOnInit() {
    this.getCities();
  }

  // get all cities
  getCities() {
    this.cityService.getCities()
      .subscribe((cities: City[]) => {
          this.cities = cities;				    // 1. success handler
        },
        (err: string) => console.log(err),			// 2. error handler
        () => console.log('Getting cities complete...')	// 3. complete handler
      );
  }
}
