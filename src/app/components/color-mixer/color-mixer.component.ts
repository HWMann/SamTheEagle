import {Component, OnDestroy, OnInit} from '@angular/core';
import {RgbModel} from "../../Models/rgb.model";
import {Mqtt} from "../../services/mqtt.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-color-mixer',
  templateUrl: './color-mixer.component.html',
  styleUrls: ['./color-mixer.component.scss']
})
export class ColorMixerComponent implements OnInit,OnDestroy {
  public colors:RgbModel[] = [];
  private subs:Subscription[] = []

  constructor(
    private mqtt:Mqtt,
  ) {
  }

  ngOnInit(): void {
    this.subs=[
      this.mqtt.topic("Bunsen/status").subscribe((data:any) => {
        console.log(data);
      })
    ]
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.subs=[]
  }

}
