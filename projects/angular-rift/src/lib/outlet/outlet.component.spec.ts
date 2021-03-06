import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponent } from './outlet.component';
import { RiftService } from '../rift.service';
import { TemplateRef, Component, ViewChild } from '@angular/core';

@Component({
  template: `<ng-template #template><div>template1</div></ng-template>`
})
class DummyTemplate1Component {
  @ViewChild('template') template!: TemplateRef<unknown>;
}

@Component({
  template: `<ng-template #template><div>template2</div></ng-template>`
})
class DummyTemplate2Component {
  @ViewChild('template') template!: TemplateRef<unknown>;
}

describe('OutletComponent', () => {
  let component: OutletComponent;
  let fixture: ComponentFixture<OutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OutletComponent,
        DummyTemplate1Component,
        DummyTemplate2Component
      ],
      providers: [RiftService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain rifts under default name', () => {
    const template1 = TestBed.createComponent(DummyTemplate1Component).componentInstance.template;
    const service: RiftService = TestBed.get(RiftService);
    service.attach(template1);

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(1);
    expect(fixture.nativeElement.children[0].textContent).toBe('template1');

    const template2 = TestBed.createComponent(DummyTemplate2Component).componentInstance.template;
    service.attach(template2, 'myOutlet');

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(1);
  });

  it('should contain rifts content under specified name', () => {
    component.name = 'myOutlet';
    fixture.detectChanges();

    const template1 = TestBed.createComponent(DummyTemplate1Component).componentInstance.template;
    const service: RiftService = TestBed.get(RiftService);
    service.attach(template1, 'myOutlet');

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(1);
    expect(fixture.nativeElement.children[0].textContent).toBe('template1');

    const template2 = TestBed.createComponent(DummyTemplate2Component).componentInstance.template;
    service.attach(template2);

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(1);
  });
});
