import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {Mqtt} from "../../services/mqtt.service";

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent {
  private subs:Subscription[]=[]
  public data:any

  constructor(
    private mqtt:Mqtt,
  ) {
  }

  ngOnInit(): void {
    this.subs=[
      this.mqtt.subscribe("action/radmaschine").subscribe((message:any) => {

        this.data=this.mqtt.parse(message)
        this.data.distance=this.data.distance/1000
        console.log(this.data)
      }),
    ]
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }
}


