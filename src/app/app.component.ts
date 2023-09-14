import {Component, OnInit} from '@angular/core';
import {Mqtt} from "./services/mqtt.service";
import {environment} from "../assets/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SamTheEagle';
  private uptime:Date = new Date()

  constructor(
    private mqtt:Mqtt,
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log("status out!");
      const payload:string=JSON.stringify({
        uptime: this.uptime.toUTCString()
      });
      this.mqtt.publish(environment.clientName+"/status",payload);
    },10000)
  }

}
