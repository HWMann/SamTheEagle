import { Component } from '@angular/core';
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    private mqtt:Mqtt
  ) {
  }
  ngAfterViewInit() {
    this.mqtt.publish("Bunsen/setting/mode",0);
  }
  
}
