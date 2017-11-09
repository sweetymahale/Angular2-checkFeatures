import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  template : `<div>
              <div [ngClass]="{'my-class': changeStyle }"> On button click style will be changed </div>
              <button (click)="changeStyle = !changeStyle;">Change Color</button>
            
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
 getStyle() {
     if(this.changeStyle) {
       return "yellow";
     } else {
       return "";
     }
   }
}
