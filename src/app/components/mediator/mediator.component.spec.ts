import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatorComponent } from './mediator.component';

describe('MediatorComponent', () => {
  let component: MediatorComponent;
  let fixture: ComponentFixture<MediatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  test('should emit an event when message is sent to child', () => {
    jest.spyOn(component.sendToChildEvent, 'emit');
    component.sendMsgToChild();
    expect(component.sendToChildEvent.emit)
      .toHaveBeenCalledWith("Hola hijo desde mediador");
  });

  test('should emit an event when message is sent to parent', () => {
    jest.spyOn(component.sendToParentEvent, 'emit');
    component.sendMsgToParent();
    expect(component.sendToParentEvent.emit)
      .toHaveBeenCalledWith("Hola padre desde mediador");
  });
});
