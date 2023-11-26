import { Component } from '@angular/core';
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent {
  constructor(
    private mqtt:Mqtt
  ) {
  }

  toggleAdverts():void
  {
    this.mqtt.publish("cmnd/George/red","2");
    this.mqtt.publish("cmnd/George/green","2");
  }

  toggleKamin():void
  {
    this.mqtt.publish("cmnd/George/blue","2");
  }

  toggleDeko():void {
    this.mqtt.publish("cmnd/Bunsen6/shelf","2");
    this.mqtt.publish("cmnd/Bunsen6/thermometer","2");
    this.mqtt.publish("cmnd/Bunsen6/testTubes","2");
  }

}
