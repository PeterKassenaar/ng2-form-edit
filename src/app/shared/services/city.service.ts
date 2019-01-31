import {Injectable} from '@angular/core';
import {City} from '../model/city.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CityService {
  cityUrl = '../assets/cities.json';

  constructor(private http: HttpClient) {
  }

  // retourneer alle cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }

  // retourneer een city, op basis van ID
  getCity(id: string): Observable<City> {
    return this.http.get<City>(this.cityUrl)
      .pipe(
        map((cities: any) => {
          return cities.find((city: City) => {
            return city.id === parseInt(id, 0);
          });
        })
      )
      ;

  }
}
