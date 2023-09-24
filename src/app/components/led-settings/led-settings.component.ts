import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AssignModel} from "../../Models/assign.model";
import {RgbModel} from "../../Models/rgb.model";
import {GlobalService} from "../../services/global.service";
import {ColorSelectObserver} from "../../observer/color-select.observer";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-led-settings',
  templateUrl: './led-settings.component.html',
  styleUrls: ['./led-settings.component.scss']
})
export class LedSettingsComponent implements OnInit {
  @Input() assign:AssignModel|null = null
  public palette:RgbModel[] = []
  @Output() closeEvent:EventEmitter<any>=new EventEmitter<any>()

  constructor(
    private globalService:GlobalService,
    private colorSelectObserver:ColorSelectObserver,
    private mqtt:Mqtt
  ) {
  }
  ngOnInit(): void {
    this.globalService.palette().subscribe((data:RgbModel[]) => {
      this.palette=data
    })
    this.colorSelectObserver.getMessage().subscribe((color:RgbModel) => {
      if(this.assign) {
        this.assign.c=color.n
        this.mqtt.publish("Bunsen/setting/assign",{
          "n": this.assign.n,
          "c": this.assign.c
        })
      }
    })
  }

  public setRainbow(stat:number) {
    if(this.assign!==null) {
      this.assign.m=stat*3;
      this.mqtt.publish("Bunsen/setting/ledMode",{
        "n": this.assign.n,
        "m": this.assign.m
      })
    }
  }

  public close():void
  {
    this.closeEvent.emit(null);
  }

}
