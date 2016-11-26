// app.module.ts
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from "./shared/services/city.service";

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent}  from './home/app.component';
import {CityEditComponent}  from './edit/city.edit.component';

// Module
@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
        ReactiveFormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent,
		CityEditComponent
	],
	providers   : [CityService],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
