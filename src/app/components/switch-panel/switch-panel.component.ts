import { Component } from '@angular/core';
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-switch-panel',
  templateUrl: './switch-panel.component.html',
  styleUrls: ['./switch-panel.component.scss']
})
export class SwitchPanelComponent {

  public effects:any = [
    {c: 120, m: 1, s:20,b: 255, r1:0, g1:0, b1:0},
    {c: 120, m: 2, s:20,b: 255, r1:0, g1:0, b1:0},
    {c: 120, m: 0, s:20,b: 255, r1:0, g1:0, b1:255}
  ]

  constructor(
    private mqtt:Mqtt,
  ) {
  }

  sendMQTT(topic:string):void
  {
    this.mqtt.publish(topic,2);
  }

  public sendRainbow():void
  {
    this.mqtt.publish("cmnd/BeakerV/strip/middle/effect",this.effects[0])
    this.mqtt.publish("cmnd/BeakerV/strip/right/effect",this.effects[0])
    this.mqtt.publish("cmnd/BeakerV/strip/sync", {f:2, t:1});
  }

  public sendColorChange():void
  {
    this.mqtt.publish("cmnd/BeakerV/strip/middle/effect",this.effects[1])
    this.mqtt.publish("cmnd/BeakerV/strip/right/effect",this.effects[1])
    this.mqtt.publish("cmnd/BeakerV/strip/sync", {f:2, t:1});
  }

  public sendBlue():void
  {
    this.mqtt.publish("cmnd/BeakerV/strip/middle/effect",this.effects[2])
    this.mqtt.publish("cmnd/BeakerV/strip/right/effect",this.effects[2])
  }

  public sendOff():void
  {
    this.mqtt.publish("cmnd/BeakerV/strip/middle/off")
    this.mqtt.publish("cmnd/BeakerV/strip/right/off")
  }

}
