export class RgbModel {
  n: number = 0
  r: number = 0;
  g: number = 0;
  b: number = 0;

  constructor(_n:number, _r: number, _g: number, _b: number) {
    this.n = _n
    this.r = _r
    this.g = _g
    this.b = _b
  }

  public getCSS(): string {
    return `background-color: rgb(${this.r},${this.g},${this.b})`;
  }

  public incR(step:number):void {
    this.r=this.limit(this.r+step);
  }

  public incG(step:number):void {
    this.g=this.limit(this.g+step);
  }

  public incB(step:number):void {
    this.b=this.limit(this.b+step);
  }

  private limit(current:number):number {
    if(current<0) current=0;
    if(current>255) current=255;
    return current;
}
}
