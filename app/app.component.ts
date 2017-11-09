import { Component } from '@angular/core';


@Component({
  selector : 'my-app',
  template : `<div>
                <div [ngClass]="{'my-class': changeStyle }"> On button click color will be changed to yellow </div>
                <button (click)="changeStyle = !changeStyle;">Change Color to yellow</button>

                <div [class.my-class-changebg]="changeStyleBlue"> On button click color will be changed to blue.... </div>
                <button (click)="changeStyleBlue = !changeStyleBlue;">Change Color to Blue</button>

                <div [style.background-color]="getStyle()"> On button click color will be changed to Red </div>
                <button (click)="changeStyleRed = !changeStyleRed;">Change Color to red</button>
                <div styled> Change the Style    </div>

              </div>`,
  styles: [
  `
  .my-class {
    background-color: yellow;
  }
  .my-class-changebg {
    background-color: blue;
  }
  `
  ]
})

export class AppComponent {
  changeStyle = false;
  changeStyleRed = false;
  changeStyleBlue = false;

  constructor() {
 }


 getStyle() {
     if(this.changeStyleRed) {
       return "red";
     } else {
       return "";
     }
   }

}
