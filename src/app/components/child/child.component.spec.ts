import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {

  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create mediator component', () => {

    const counterValue =
      fixture.nativeElement.querySelector('p[data-test="child-counter"]');
    const msgReceived =
      fixture.nativeElement.querySelector('p[data-test="child-message"]');

    expect(counterValue.textContent).toBe("Valor del contador del padre: 0")
    expect(msgReceived.textContent).toBe("Mensaje recibido: ")
  });

  test('should emit an event when count is incremented', () => {
    jest.spyOn(component.incrementEvent, 'emit');
    component.incrementCount();
    expect(component.incrementEvent.emit).toHaveBeenCalledWith(1);
  });

  test('should emit an event when clicks is reset', () => {
    jest.spyOn(component.resetEvent, 'emit');
    component.resetClicks();
    expect(component.resetEvent.emit).toHaveBeenCalledWith();
  });

})
