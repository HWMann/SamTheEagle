import {NgModule, isDevMode, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {MqttModule, IMqttServiceOptions} from 'ngx-mqtt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {environment} from "../assets/environments/environment";
import {Icons} from "./icons";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherComponent} from './components/weather/weather.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {ServiceWorkerModule} from '@angular/service-worker';
import {AdvertComponent} from './components/advert/advert.component';
import {HomeComponent} from './components/home/home.component';

import {SettingsComponent} from './components/settings/settings.component';
import {SamComponent} from './components/sam/sam.component';
import {TileComponent} from './components/tile/tile.component';
import {ColorsComponent} from './components/colors/colors.component';
import {AssignsComponent} from './components/assigns/assigns.component';
import {CalibrateComponent} from './components/calibrate/calibrate.component';
import {PaletteComponent} from './components/palette/palette.component';
import {RgbMixerComponent} from './components/rgb-mixer/rgb-mixer.component';
import {LedSettingsComponent} from './components/led-settings/led-settings.component';
import {LedDisplayComponent} from './components/led-display/led-display.component';
import { DumpPipe } from './pipes/dump.pipe';
import { LedComponent } from './components/led/led.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwitchPanelComponent } from './components/switch-panel/switch-panel.component';
import { EffekteComponent } from './components/effekte/effekte.component';
import {ConfigService} from "./services/config.service";
import { BikeComponent } from './components/bike/bike.component';

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
    HomeComponent,
    SettingsComponent,
    SamComponent,
    TileComponent,
    ColorsComponent,
    AssignsComponent,
    CalibrateComponent,
    PaletteComponent,
    RgbMixerComponent,
    LedSettingsComponent,
    LedDisplayComponent,
    DumpPipe,
    LedComponent,
    SliderComponent,
    SwitchPanelComponent,
    EffekteComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    Icons,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => {
          return configService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ]
})
export class AppModule {

}
