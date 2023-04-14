import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import {ChildComponent} from "../child/child.component";
import {MediatorComponent} from "../mediator/mediator.component";

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent, MediatorComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  test('should create parent component', () => {

    const counterValue =
      fixture.nativeElement.querySelector('p[data-test="parent-counter"]');
    const numOfClicks =
      fixture.nativeElement.querySelector('p[data-test="parent-clicks"]');
    const msgReceived =
      fixture.nativeElement.querySelector('p[data-test="parent-message"]');

    expect(counterValue.textContent).toBe("Valor del contador: 0")
    expect(numOfClicks.textContent).toBe("Número de clics del hijo: 0")
    expect(msgReceived.textContent).toBe("Mensaje recibido: ")
  });


  test('should pass count value to child component', () => {
    const childComponent = fixture.nativeElement.querySelector('app-child');
    const childCount = childComponent.querySelector('p').textContent;

    const childMessage = "Valor del contador del padre: ";
    expect(childCount).toContain(childMessage + component.counter);
  });

  test('should increment count when child component emits increment event', () => {
    const childComponent = fixture.nativeElement.querySelector('app-child');
    const incrementButton =
      childComponent.querySelector('button[data-test="increment"]');

    incrementButton.click();
    fixture.detectChanges();

    expect(component.counter).toBe(1);
    expect(component.clicks).toBe(1);
  });


  test('should reset count value when reset button is clicked', () => {
    const childComponent = fixture.nativeElement.querySelector('app-child');
    const incrementButton =
      childComponent.querySelector('button[data-test="increment"]');
    const resetButton = fixture.nativeElement.querySelector('button');

    incrementButton.click();
    fixture.detectChanges();

    resetButton.click();
    fixture.detectChanges();

    expect(component.counter).toBe(0);
    expect(component.clicks).toBe(1);
  });

  test('should set initial count value to a 5', () => {
    component.counter = 5;
    fixture.detectChanges();

    expect(component.counter).toBe(5);
    expect(component.clicks).toBe(0);
  });


  test('should reset clicks value when reset button is clicked', () => {
    const childComponent = fixture.nativeElement.querySelector('app-child');
    const incrementButton =
      childComponent.querySelector('button[data-test="increment"]');
    const resetButton = childComponent.querySelector('button[data-test="reset"]');

    incrementButton.click();
    fixture.detectChanges();

    resetButton.click();
    fixture.detectChanges();

    expect(component.counter).toBe(1);
    expect(component.clicks).toBe(0);
  });


  test('should receive message when send button is clicked', () => {
    const childComponent = fixture.nativeElement.querySelector('app-mediator');
    const sendButton =
      childComponent.querySelector('button[data-test="send-parent"]');

    sendButton.click();
    fixture.detectChanges();

    const msgReceived =
      fixture.nativeElement.querySelector('p[data-test="parent-message"]');

    expect(msgReceived.textContent)
      .toBe("Mensaje recibido: Hola padre desde mediador")
  });

  test('should share message when send button is clicked', () => {
    const childComponent = fixture.nativeElement.querySelector('app-mediator');
    const sendButton = childComponent.querySelector('button[data-test="send-child"]');

    sendButton.click();
    fixture.detectChanges();

    const msgReceived =
      fixture.nativeElement.querySelector('p[data-test="child-message"]');

    expect(msgReceived.textContent)
      .toBe("Mensaje recibido: Hola hijo desde mediador")
  });

  test('should reset messages when reset button is clicked', () => {
    const childComponent = fixture.nativeElement.querySelector('app-mediator');
    const sendParentBtn =
      childComponent.querySelector('button[data-test="send-parent"]');
    const sendChildBtn =
      childComponent.querySelector('button[data-test="send-child"]');

    const resetButton =
      childComponent.querySelector('button[data-test="reset-message"]');

    sendParentBtn.click();
    sendChildBtn.click();
    fixture.detectChanges();

    resetButton.click();
    fixture.detectChanges();

    const parentMsg = fixture.nativeElement.querySelector('p[data-test="parent-message"]');
    const childMsg = fixture.nativeElement.querySelector('p[data-test="child-message"]');

    expect(parentMsg.textContent).toBe("Mensaje recibido: ")
    expect(childMsg.textContent).toBe("Mensaje recibido: ")
  });


});
