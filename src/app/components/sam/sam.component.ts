import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.scss']
})
export class SamComponent {
  @Input() public link:string = "/home"
  @Input() public title:string = "/Sam the Eagle"

}
