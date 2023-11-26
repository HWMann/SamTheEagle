import {Observable, ReplaySubject, Subscription} from "rxjs";
import {Mqtt} from "./mqtt.service";
import {RgbModel} from "../Models/rgb.model";
import {Injectable} from "@angular/core";
import {AssignModel} from "../Models/assign.model";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private subs: Subscription[] = []

  private paletteSubject: ReplaySubject<any> = new ReplaySubject<any>()
  private paletteData: RgbModel[] = []

  private assignSubject: ReplaySubject<any> = new ReplaySubject<any>()
  private assignData: any = {}

  constructor(
    private mqtt: Mqtt
  ) {
  }

  public load(): void {
    this.mqtt.subscribe("stat/Bunsen6/palette/#").subscribe((message: any) => {
      const data = this.mqtt.parse(message)
      if(!this.paletteData[data.n])
      {
        this.paletteData[data.n] = new RgbModel(data.n, data.r, data.g, data.b)
      }
      this.paletteSubject.next(this.paletteData)
    })
    this.mqtt.subscribe("stat/Bunsen6/assigned/#").subscribe((message: any) => {
      const data = this.mqtt.parse(message)
      let found:boolean = false

      for(let a in this.assignData) {
        if(a===data.s) {
          found=true
        }
      }

      if(!found) {
        this.assignData[data.s]=new AssignModel(data.n, data.s, data.t, data.c, data.m, data.b, data.o)
      }
      this.assignSubject.next(this.assignData)
    })
    this.mqtt.publish("cmnd/Bunsen6/sendPalette", null);
  }

  public palette() {
    return this.paletteSubject.asObservable();
  }

  public assigns() {
    console.log("replay")
    return this.assignSubject.asObservable();
  }

}
