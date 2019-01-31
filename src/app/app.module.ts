// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from './shared/services/city.service';

// Components
import {MainComponent} from './MainComponent';
import {AppComponent} from './home/app.component';
import {CityEditComponent} from './edit/city.edit.component';
import {CityAddComponent} from './add/city.add.component';
import {HttpClientModule} from '@angular/common/http';

// Module
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    MainComponent,
    AppComponent,
    CityEditComponent,
    CityAddComponent
  ],
  providers: [CityService],
  bootstrap: [MainComponent]
})
export class AppModule {
}
