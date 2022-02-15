import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [MyLibComponent, CounterComponent],
  imports: [
  ],
  exports: [MyLibComponent, CounterComponent]
})
export class MyLibModule { }
