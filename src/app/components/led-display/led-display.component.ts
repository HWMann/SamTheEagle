import {Component, OnInit} from '@angular/core';
import {AssignModel} from "../../Models/assign.model";
import {GlobalService} from "../../services/global.service";
import {RgbModel} from "../../Models/rgb.model";
import {ColorSelectObserver} from "../../observer/color-select.observer";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-led-display',
  templateUrl: './led-display.component.html',
  styleUrls: ['./led-display.component.scss'],
})
export class LedDisplayComponent implements OnInit {
  public assigns:any = {}
  public palette:RgbModel[] = []

  public selectedAssign:AssignModel | null = null

  constructor(
    private globalService:GlobalService,
    private colorSelectObserver:ColorSelectObserver,
    private mqtt:Mqtt
  ) {
  }

  public selectAssign(n:string):void {
    this.selectedAssign=this.assigns[n]
  }

  ngOnInit(): void {
    this.globalService.assigns().subscribe((data:AssignModel[]) => {
      this.assigns=data
    })
  }

  public closeSettings():void {
    this.selectedAssign=null
  }

  public updateAssign($event:any):void {
    console.log("change:",this.selectedAssign);
  }
}
