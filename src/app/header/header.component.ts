import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { 

  }
  public innerWidth: any;
  public WT: number;
  public COL1 = "rgba(0,0,0,0)";
  public COL2 = "rgba(0,0,0,0)";
/*
  public COL1A = "rgba(50,50,225,0.1)";
  public COL2A = "rgba(150,0,200,0.6)";

  public COL1B = "rgba(50,50,225,0.25)";
  public COL2B = "rgba(150,0,200,0.75)";
*/
  public COL1A = "rgba(5,50,230,0.1)";
  public COL2A = "rgba(0,140,200,0.6)";

  public COL1B = "rgba(5,50,230,0.25)";
  public COL2B = "rgba(0,140,200,0.75)";
  public animation: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.WTRIANGLE(this.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.WTRIANGLE(this.innerWidth);
  }

  @HostListener('window:load', ['$event'])
  onLoad(event) {
    
    this.Render();
  }

  WTRIANGLE(W)
  {
    this.COL1 = this.COL1A;
    this.COL2 = this.COL2A;

    if (W < 1020)
    {
      this.WT = 2.5;
    }
    else
    {
      this.WT = 2;
    }
    
    if (W < 640)
    {
      this.WT = 3.3;
      this.COL1 = this.COL1B;
      this.COL2 = this.COL2B;
    }
  }
    
  Render = () => {
  
    //setup canvas enviroment
    let time = new Date().getTime() * 0.0025;
    const color1 = this.COL1;
    const color2 = this.COL2;
    var canvas : any = document.getElementById("canvas_L");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth,  canvas.clientHeight);
    ctx.save();
  
    //the sin & cos
    let randomX = .5;
    let randomY = .15;
  
    // sin & cos for the movement of the triangles in the canvas
    let rectX = Math.cos(time * 1) * 2.5 + randomX;
    let rectY = Math.sin(time * 1) * 2.5 + randomY;
    let rectX2 = Math.cos(time * .8) * 3.5 + randomX;
    let rectY2 = Math.sin(time * .8) * 3.5 + randomY;
    let rectX3 = Math.cos(time * 1.4) * 4.4 + randomX;
    let rectY3 = Math.sin(time * 1.4) * 4.4 + randomY;
  
    //triangle gradiente ==========================================
    var triangle_gradient = ctx.createLinearGradient(0, 0, canvas.clientWidth,  canvas.clientHeight);
    triangle_gradient.addColorStop(0, color1);
    triangle_gradient.addColorStop(1, color2);
  
    //triangle group 1 ===========================================
    // triangle 1.1
    ctx.beginPath();
    ctx.moveTo(rectX2 + 120, rectY2 - 100);
    ctx.lineTo(rectX2 + 480/this.WT, rectY2 + 80/this.WT);
    ctx.lineTo(rectX2 + 26/this.WT, rectY2 + 185/this.WT);
    ctx.fillStyle = triangle_gradient;
    ctx.fill();
  
    //triangle 1.2
    ctx.beginPath();
    ctx.moveTo(rectX - 50, rectY - 25);
    ctx.lineTo(rectX + 270/this.WT, rectY + 25/this.WT);
    ctx.lineTo(rectX - 50/this.WT, rectY + 195/this.WT);
    ctx.fillStyle = triangle_gradient;
    ctx.fill();
  
    //triangle 1.3
    ctx.beginPath();
    ctx.moveTo(rectX3 - 140, rectY3 - 150);
    ctx.lineTo(rectX3 + 180/this.WT, rectY3 + 210/this.WT);
    ctx.lineTo(rectX3 - 225/this.WT, rectY3 - 50/this.WT);
    ctx.fillStyle = triangle_gradient;
    ctx.fill();
  
    ctx.restore();
  
  requestAnimationFrame(this.Render);
}

}
  /*
  // pure javascrip random function ============
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  */  
  //
