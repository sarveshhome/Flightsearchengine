import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SearchService } from './services/search.service';
export function providers() {
  return [SearchService];
}

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FlightDetailsCardComponent } from './components/flight-details-card/flight-details-card.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';

export function imports() {
  return [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ];
}

export function declarations() {
  return [
    AppComponent,
    SearchBoxComponent,
    InfoBoxComponent,
    FlightDetailsCardComponent
  ];
}


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    FlightDetailsCardComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    imports()
  ],
  providers: [providers()],
  bootstrap: [AppComponent]
})
export class AppModule { }
