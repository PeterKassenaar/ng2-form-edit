import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class CityService {
    cityUrl: string = 'app/data/cities.json';

    constructor(private http: Http) {
    }

    // retourneer alle cities
    getCities(): Observable<City[]> {
        return this.http.get(this.cityUrl)
            .map(cities => cities.json());
    }

    // retourneer een city, op basis van ID
    getCity(id: string): Observable<City> {
        return this.http.get(this.cityUrl)
            .map(cities => cities.json())
            .map(cities => cities.find((city: City) => {
                return city.id === parseInt(id);
            }))
    }
}