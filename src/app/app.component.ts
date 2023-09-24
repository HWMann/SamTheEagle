import {Component, OnInit} from '@angular/core';
import {Mqtt} from "./services/mqtt.service";
import {environment} from "../assets/environments/environment";
import {GlobalService} from "./services/global.service";

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
    private globalService:GlobalService
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      const payload:string=JSON.stringify({
        uptime: this.uptime.toUTCString()
      });
      this.mqtt.publish(environment.clientName+"/status",payload);
    },10000)
    this.globalService.load();

  }

}
