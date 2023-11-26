import {Component, Input} from '@angular/core';
import {AssignModel} from "../../Models/assign.model";
import {Icons} from "../../icons";
import {RgbModel} from "../../Models/rgb.model";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent {
  @Input() public assign:AssignModel = new AssignModel(0,"","",0,0,0,0)
  public palette:RgbModel[] = []

  constructor(
    public icons:Icons,
    private globalService:GlobalService
  ) {
    this.globalService.palette().subscribe((data:any) => {
      this.palette=data
    })
  }
}
