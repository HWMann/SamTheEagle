export class EffektModel
{
  public id:number
  public name:string
  public brightness:number
  public mode:number
  public speed:number
  public color1:string
  public color2:string
  public color3:string
  public r1:number
  public g1:number
  public b1:number
  public r2:number
  public g2:number
  public b2:number
  public r3:number
  public g3:number
  public b3:number
  constructor() {
    this.id=0
    this.name=""
    this.brightness=0;
    this.mode=0;
    this.speed=0;
    this.color1="#ff0000"
    this.color2="#00ff00"
    this.color3="#0000ff"
    this.r1=255
    this.g1=0
    this.b1=0
    this.r2=0
    this.g2=255
    this.b2=0
    this.r3=0
    this.g3=0
    this.b3=255
  }
}
