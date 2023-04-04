import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 0

  onIncrement() {
    this.counter += 1;
  }

  onDecrement() {
    this.counter -= 1;
  }
}
