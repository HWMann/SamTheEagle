import {Component, OnDestroy, OnInit} from '@angular/core';
import {Mqtt} from "../../services/mqtt.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  private subs:Subscription[]=[]

  public tempLive:number = 0
  public tempWork:number = 0
  public tempSleep:number = 0

  constructor(
    private mqtt:Mqtt,
  ) {
  }

  ngOnInit(): void {
    this.subs=[
      this.mqtt.subscribe("PiMatic/Wohnzimmer/TEMP").subscribe((message:any) => {
        const payload=this.mqtt.parse(message);
        this.tempLive=payload;
      }),
      this.mqtt.subscribe("PiMatic/Schlafzimmer/TEMP").subscribe((message:any) => {
        const payload=this.mqtt.parse(message);
        this.tempWork=payload;
      }),
      this.mqtt.subscribe("PiMatic/Buero/TEMP").subscribe((message:any) => {
        const payload=this.mqtt.parse(message);
        this.tempSleep=payload;
      })
    ]
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }
}
