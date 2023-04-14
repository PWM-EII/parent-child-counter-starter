import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  counter: number = 0;
  clicks: number = 0;

  parentMsg: string = '';
  childMsg: string = '';

  onIncrement(amount: number) {

  }

  reset() {

  }

  onResetClicks() {

  }

  onReceiveMsg(message: string) {

  }

  onSendMsgToChild(message: string) {

  }
}
