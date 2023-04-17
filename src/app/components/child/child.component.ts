import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  message: string = '';
  @Input()
  counter: number = 0;
  @Output()
  incrementEvent = new EventEmitter<number>();
  @Output()
  resetEvent = new EventEmitter();


  incrementCount() {

  }

  resetClicks() {

  }
}
