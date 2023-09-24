import {Component, Input} from '@angular/core';
import {AssignModel} from "../../Models/assign.model";

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent {
  @Input() public assign:AssignModel = new AssignModel(0,"","",0,0,0,0)
}
