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
    this.mqtt.publish("Beauregard/relais/1","2");
    this.mqtt.publish("Beauregard/relais/2","2");
  }

  toggleKamin():void
  {
    this.mqtt.publish("Beauregard/relais/3","2");
  }

}
