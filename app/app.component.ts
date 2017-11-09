import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  template : `<div>
              <div [ngClass]="{'my-class': changeStyle }"> On button click color will be changed to yellow </div>
              <button (click)="changeStyle = !changeStyle;">Change Color to yellow</button>
              <div [style.background-color]="getStyle()"> On button click color will be changed to Red </div>
              <button (click)="changeStyleRed = !changeStyleRed;">Change Color to red</button>

              </div>`,
  styles: [
  `
  .my-class {
    background-color: yellow;
  }
  `
  ]
})

export class AppComponent {
  changeStyle = false;

  constructor() {
 }
 changeStyleRed = false;

 getStyle() {
     if(this.changeStyleRed) {
       return "red";
     } else {
       return "";
     }
   }

}
