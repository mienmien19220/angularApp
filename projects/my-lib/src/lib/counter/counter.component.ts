import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onPlusClick(){
    this.counter++;
  }
  onMinusClick(){
    this.counter--;
  }

}
