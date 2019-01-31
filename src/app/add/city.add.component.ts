// city.detail.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from '../shared/model/city.model';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {cityFormModel} from '../shared/model/city.form.model';

@Component({
  selector: 'city-detail',
  templateUrl: 'city.add.html'
})

export class CityAddComponent implements OnInit {
  cityForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private  router: Router) {
  }

  ngOnInit() {
    // 1. build our form
    this.cityForm = this.formBuilder.group(cityFormModel);

  }

  addCity() {
    alert('TODO: Save new values: ' + JSON.stringify(this.cityForm.value));
    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
