import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MqttModule, IMqttServiceOptions} from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import {environment} from "../assets/environments/environment";
import { ServiceWorkerModule } from '@angular/service-worker';
import { AdvertComponent } from './components/advert/advert.component';
import { ColorMixerComponent } from './components/color-mixer/color-mixer.component';
import { HomeComponent } from './components/home/home.component';
import { ColorSwatchComponent } from './components/color-swatch/color-swatch.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'kermit',
  port: 9000,
  protocol: 'ws',
  path: '',
  clientId: environment.clientName
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AdvertComponent,
    ColorMixerComponent,
    HomeComponent,
    ColorSwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
