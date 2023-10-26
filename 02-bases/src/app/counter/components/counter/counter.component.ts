import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter', // This is the name of the component, it is used as a tag in the HTML
  template: `
    <h1>Counter: {{counter}}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value:number ):void{
    this.counter += value;
  }

  reset(value:number = 10):void{
    this.counter = value;
  }
}
