import {Component, OnInit} from '@angular/core';
import {EffektModel} from "../../Models/EffektModel";
import {ApiService} from "../../services/api.service";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-effekte',
  templateUrl: './effekte.component.html',
  styleUrls: ['./effekte.component.scss']
})
export class EffekteComponent implements OnInit {

  constructor(
    private api: ApiService,
    private mqtt: Mqtt
  ) {
  }

  public effekte: EffektModel[] = []

  ngOnInit(): void {
    this.api.get("/effects/sam").subscribe((effekte: EffektModel[]) => {
      this.effekte = effekte
    })
  }

  public sendEffekt(effekt: EffektModel): void {
    let rgb1=this.hexToRGB(effekt.color1)
    let rgb2=this.hexToRGB(effekt.color1)
    let rgb3=this.hexToRGB(effekt.color1)
    let sendFX={
      m: effekt.mode,
      c: 120,
      b: effekt.brightness,
      s: effekt.speed,
      r1: rgb1[0],
      g1: rgb1[1],
      b1: rgb1[2],
      r2: rgb2[0],
      g2: rgb2[1],
      b2: rgb2[2],
      r3: rgb3[0],
      g3: rgb3[1],
      b3: rgb3[2]
    }

    this.mqtt.publish("cmnd/BeakerV/strip/left/effect", sendFX)
    this.mqtt.publish("cmnd/BeakerV/strip/middle/effect", sendFX)
    this.mqtt.publish("cmnd/BeakerV/strip/right/effect", sendFX)
  }

  public hexToRGB(hex: string):any {
    let rgb=[0,0,0]
    if(hex) {
      rgb[0] = parseInt(hex.slice(1, 3), 16)
      rgb[1] = parseInt(hex.slice(3, 5), 16)
      rgb[2] = parseInt(hex.slice(5, 7), 16)
    }

    return rgb;
  }

  public off():void {
    this.mqtt.publish("cmnd/BeakerV/strip/left/off", null)
    this.mqtt.publish("cmnd/BeakerV/strip/middle/off", null)
    this.mqtt.publish("cmnd/BeakerV/strip/right/off", null)
  }
}
