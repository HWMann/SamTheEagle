import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private mqtt:Mqtt
  ) {
  }

  ngAfterViewInit() {
    this.mqtt.publish("cmnd/Bunsen6/mode",0);
  }

}
