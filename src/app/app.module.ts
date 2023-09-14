import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MqttModule, IMqttServiceOptions} from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import {environment} from "../assets/environments/environment";

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
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
