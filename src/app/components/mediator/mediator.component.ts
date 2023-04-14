import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent {

  @Input()
  counter: number = 0;
  @Input()
  clicks: number = 0;

  @Output()
  sendToParentEvent = new EventEmitter<string>();
  @Output()
  sendToChildEvent = new EventEmitter<string>();

  parentMsg: string = 'Hola padre desde mediador';
  childMsg: string = 'Hola hijo desde mediador';

  sendMsgToParent() {

  }

  sendMsgToChild() {

  }

  reset() {

  }
}
