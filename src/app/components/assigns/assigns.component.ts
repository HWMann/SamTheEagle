import {Component, OnDestroy, OnInit} from '@angular/core';
import {RgbModel} from "../../Models/rgb.model";
import {GlobalService} from "../../services/global.service";
import {AssignModel} from "../../Models/assign.model";
import {Subscription} from "rxjs";
import {ColorSelectObserver} from "../../observer/color-select.observer";
import {Mqtt} from "../../services/mqtt.service";
import {NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-assigns',
  templateUrl: './assigns.component.html',
  styleUrls: ['./assigns.component.scss']
})
export class AssignsComponent implements OnInit, OnDestroy {
  public palette: RgbModel[] = []
  private subs: Subscription[] = []
  public selectedColor: RgbModel | null = null

  constructor(
    private globalService: GlobalService,
    private colorSelectObserver: ColorSelectObserver,
    private mqtt:Mqtt
  ) {}

  public selectLED($event: any): void {
    if(this.selectedColor!==null) {
      this.mqtt.publish("cmnd/Bunsen6/assign",{
        "n": $event.n,
        "c": this.selectedColor?.n
      })
    }
  }

  ngAfterViewInit() {
    this.mqtt.publish("cmnd/Bunsen6/mode",2);
    this.mqtt.publish("cmnd/Bunsen6/shelf",1);
    this.mqtt.publish("cmnd/Bunsen6/thermometer",1);
    this.mqtt.publish("cmnd/Bunsen6/testTubes",1);

  }

  ngOnInit(): void {
    this.subs = [
      this.colorSelectObserver.getMessage().subscribe((color: RgbModel) => {
        this.selectedColor = color
      }),
      this.globalService.palette().subscribe((palette: any) => {
        this.palette = palette
      })
    ]
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}
