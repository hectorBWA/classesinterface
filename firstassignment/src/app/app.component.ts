import { Component } from '@angular/core';

class Point{
  x: number;
  y: number;

  constructor(xNew: number, yNew: number){
    this.x = xNew;
    this.y = yNew;

  }
}


class Point3D extends Point{
  z: number;

  constructor(xVal: number, yVal: number, zVal: number){
    super(xVal, yVal);
    this.z = zVal;
  }

  add(new3DPoint){
    return new Point3D(
      new3DPoint.x + this.x,
      new3DPoint.y + this.y,
      new3DPoint.z + this.z
    );

    // let point2D = super.add(new3DPoint);
    // return new Point3D{
    //   point2D.x,
    //   point2D.y,
    //   new3DPoint.z + this.z
    }
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    let p1 = new Point(5, 10);
    let p2 = new Point(10, 15);
    let p3 = let p1.add(p2);

    console.log(p3);

    let p3D1 = new Point3D(5, 10, 15);
    let p3D2 = new Point3D(10, 15, 20);
    let p3D3 = new Point3D(10, 15, 20);
    console.log(p3D3);
  }
}
