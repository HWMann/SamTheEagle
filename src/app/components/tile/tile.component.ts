import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() public link: string = "/home"
  @Input() public title: string = "a funny tile"
  @Input() public x: number = 0
  @Input() public y: number = 0
  @Input() public w: number = 0
  @Input() public h: number = 0

}


