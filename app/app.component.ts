import { Component } from '@angular/core';

@Component({
  selector : 'my-app',
  template : '<button (click)='changeColor()'>{{name}}</button>'
})

export class AppComponent {
  constructor(){
  this.name = 'Angular'
  }
  changeColor(){
  

  }
}
