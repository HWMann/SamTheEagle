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

  private assignsSubject: ReplaySubject<any> = new ReplaySubject<any>()
  private assignData: any = {}

  constructor(
    private mqtt: Mqtt
  ) {
  }

  public load(): void {
    this.mqtt.subscribe("Bunsen/palette/#").subscribe((message: any) => {
      const data = this.mqtt.parse(message)
      this.paletteData[data.n] = new RgbModel(data.n, data.r, data.g, data.b)
      this.paletteSubject.next(this.paletteData)
    })
    this.mqtt.subscribe("Bunsen/assigned/#").subscribe((message: any) => {
      const data = this.mqtt.parse(message)
      let found:boolean = false
      this.assignData[data.s]=new AssignModel(data.n, data.s, data.t, data.c, data.m, data.b, data.h)
      this.assignsSubject.next(this.assignData)
    })
    this.mqtt.publish("Bunsen/setting/palette", null);
  }

  public palette() {
    return this.paletteSubject.asObservable();
  }

  public assigns() {
    return this.assignsSubject.asObservable();
  }

}
