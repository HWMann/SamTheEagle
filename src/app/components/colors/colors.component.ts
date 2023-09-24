import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColorSelectObserver} from "../../observer/color-select.observer";
import {Subscription} from "rxjs";
import {RgbModel} from "../../Models/rgb.model";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit,OnDestroy {

  private subs:Subscription[]=[]
  public selectedColor:RgbModel | undefined

  constructor(
    private colorSelectObserver:ColorSelectObserver,
    private mqtt:Mqtt
  ) {
  }

  ngAfterViewInit() {
    this.mqtt.publish("Bunsen/setting/mode",1);
  }

  ngOnInit(): void {

    this.subs=[
      this.colorSelectObserver.getMessage().subscribe((color:RgbModel) => {
        this.selectedColor=color
      })
    ]

    this.mqtt.publish("Bunsen/setting/mode",1);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
    this.mqtt.publish("Bunsen/setting/csmOff",null);
  }

}
