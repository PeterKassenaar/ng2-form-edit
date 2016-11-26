// city.detail.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from "../shared/model/city.model";
import {CityService} from "../shared/services/city.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';

@Component({
    moduleId   : module.id,
    selector   : 'city-detail',
    templateUrl: 'city.edit.html',
    styleUrls  : ['loading.css']
})

export class CityEditComponent implements OnInit, OnDestroy {
    id: string;
    currentCity: City;
    cityForm: FormGroup;

    private sub: any; // pointer to subscription on Route

    constructor(private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                private cityService: CityService) {
    }

    ngOnInit() {
        // 1. build our form
        this.cityForm = this.formBuilder.group({
            name      : '',
            province  : '',
            highlights: ''
        });
        // 2. get current city, based on ID in querystring, simulate a delay of 1500ms
        this.sub = this.route.params
            .delay(1500)
            .map(params => params['id'])
            .switchMap(id => this.cityService.getCity(id))
            .subscribe((city: City) => {
                this.currentCity = city;
                // 3. fill in form fields with values from retrieved city
                this.cityForm.setValue({
                    name      : city.name,
                    province  : city.province,
                    highlights: city.highlights
                });
                // 4. alternative notation would be:
                // this.cityForm.patchValue({
                //     name      : city.name,
                //     province  : city.province,
                //     highlights: city.highlights
                // });
                // See for example this great blogpost by Todd Motto
                // for more information: https://toddmotto.com/angular-2-form-controls-patch-value-set-value
            });
    }

    ngOnDestroy() {
        // If subscribed, we must unsubscribe before Angular destroys the component.
        // Failure to do so could create a memory leak.
        this.sub.unsubscribe();
    }

    updateCity() {
        alert('TODO: Save new values: ' + JSON.stringify(this.cityForm.value));
        this.router.navigate(['home']);
    }

    cancel() {
        this.router.navigate(['home']);
    }
}
