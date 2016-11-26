// app.routes.ts
import {Routes} from '@angular/router';
import {AppComponent} from "./home/app.component";
import {CityEditComponent} from "./edit/city.edit.component";

export const AppRoutes: Routes = [
	{path: '', component: AppComponent},
	{path: 'home', component: AppComponent},
	{path: 'edit/:id', component: CityEditComponent}
];
