import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColorSelectObserver} from "../../observer/color-select.observer";
import {Subscription} from "rxjs";
import {RgbModel} from "../../Models/rgb.model";
import {Mqtt} from "../../services/mqtt.service";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})

export class ColorsComponent implements OnInit,OnDestroy {

  public selectedColor:RgbModel | undefined
  public palette:RgbModel[] = []


  constructor(
    private colorSelectObserver:ColorSelectObserver,
    private mqtt:Mqtt,
    private globalService:GlobalService
  ) {
  }

  ngAfterViewInit() {
    this.mqtt.publish("cmnd/Bunsen6/mode",1);
    this.globalService.palette().subscribe((data:RgbModel[]) => {
      this.palette=data
    })
  }

  ngOnInit(): void {
    this.mqtt.publish("cmnd/Bunsen6/mode",1);
  }

  public selectColor($event:any):void {
    this.selectedColor=this.palette[$event];
  }

  ngOnDestroy(): void {
    this.mqtt.publish("cmnd/Bunsen6/mode",0);
  }

}
