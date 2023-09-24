import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {RgbModel} from "../../Models/rgb.model";
import {Subscription} from "rxjs";
import {Mqtt} from "../../services/mqtt.service";
import {GlobalService} from "../../services/global.service";
import {ColorSelectObserver} from "../../observer/color-select.observer";

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit, OnDestroy {
  @Input() selectedColor: RgbModel | null = null
  @Input() cols:number = 16

  private subs: Subscription[] = []
  public palette: RgbModel[] = []

  constructor(
    private mqtt: Mqtt,
    private globalService: GlobalService,
    private colorSelectObserver:ColorSelectObserver
  ) {
  }

  ngOnInit(): void {
    this.mqtt.publish("Bunsen/setting/palette", null)
    this.subs = [
      this.globalService.palette().subscribe((data: any) => {
        this.palette = data
      })
    ]
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }

  public selectColor(color: RgbModel): void {
    this.selectedColor = color
    this.colorSelectObserver.select(color)
  }

}
