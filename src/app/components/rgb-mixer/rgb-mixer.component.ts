import {Component, Input} from '@angular/core';
import {RgbModel} from "../../Models/rgb.model";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-rgb-mixer',
  templateUrl: './rgb-mixer.component.html',
  styleUrls: ['./rgb-mixer.component.scss']
})
export class RgbMixerComponent {
  @Input() color:RgbModel = new RgbModel(0,0,0,0)
  public steps:number[]=[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255]

  constructor(
    private mqtt:Mqtt
  ) {
  }
  public setColorR(step:number):void {
    if(this.color) {
      this.color.r=step
      this.mqtt.publish("cmnd/Bunsen6/rgb",this.color)
    }
  }

  public setColorG(step:number):void {
    if(this.color) {
      this.color.g=step
      this.mqtt.publish("cmnd/Bunsen6/rgb",this.color)
    }
  }

  public setColorB(step:number):void {
    if(this.color) {
      this.color.b=step
      this.mqtt.publish("cmnd/Bunsen6/rgb",this.color)
    }
  }
}
