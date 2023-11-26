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
  @Output() changeEvent:EventEmitter<any>=new EventEmitter<any>()

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
  }

  public colorSelect($event:any):void {
    console.log("assigning",$event);
    if(this.assign!==null) {
      this.assign.c=$event
      this.mqtt.publish("cmnd/Bunsen6/assignColor",{
        "n": this.assign.n,
        "c": this.assign.c
      })
    }
  }

  public setMode(stat:number):void {
    if(this.assign!==null) {
      this.assign.m=stat
      this.mqtt.publish("cmnd/Bunsen6/ledMode",{
        "n": this.assign.n,
        "m": this.assign.m
      })
    }
  }

  public setBrightness(value:number):void {
    if(this.assign!==null) {
      this.assign.b=value
      this.mqtt.publish("cmnd/Bunsen6/ledBrightness",{
        "n": this.assign.n,
        "b": this.assign.b
      })
    }
  }

  public setHueOffset($event:any):void {
    if(this.assign!==null) {
      this.assign.o=$event
      this.mqtt.publish("cmnd/Bunsen6/hue",{
        "n": this.assign.n,
        "o": this.assign.o
      })
    }
  }

  public close():void
  {
    this.closeEvent.emit(null);
  }

}
