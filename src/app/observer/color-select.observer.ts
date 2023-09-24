import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {RgbModel} from "../Models/rgb.model";

@Injectable({
  providedIn: 'root'
})
export class ColorSelectObserver {
  private subject:Subject<any> = new Subject<any>()

  constructor() { }

  public select(color:RgbModel) {
    this.subject.next(color);
  }

  public getMessage():Observable<any> {
    return this.subject.asObservable()
  }
}
