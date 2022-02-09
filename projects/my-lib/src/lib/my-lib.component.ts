import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      this is my lib
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
