import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() public min:number = 0
  @Input() public max:number = 1
  @Input() public step:number = 0
  @Input() public value:number = 0;

  @Output() change:EventEmitter<any> = new EventEmitter<any>()
  public inc(v:number):void {
    this.value+=this.step*v;
    if(this.value>this.max) {
      this.value=this.max;
    }
    if(this.value<this.min) {
      this.value=this.min;
    }
    this.change.emit(this.value);
  }

  public calcOffset():number {
    let percent=(100/this.max)*this.value
    return percent;
  }
}
