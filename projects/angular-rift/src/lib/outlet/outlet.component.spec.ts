import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponent } from './outlet.component';
import { RiftService } from '../rift.service';
import { TemplateRef, Component, ViewChild } from '@angular/core';

@Component({
  template: `<ng-template #template></ng-template>`
})
class DummyTemplate1Component {
  @ViewChild('template') template!: TemplateRef<unknown>;
}

@Component({
  template: `<ng-template #template></ng-template>`
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

  it('should contain rifts content', () => {
    const template1 = TestBed.createComponent(DummyTemplate1Component).componentInstance.template;
    const service: RiftService = TestBed.get(RiftService);
    service.attach(template1, 2000);

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(1);
    expect(fixture.nativeElement.children[0].style.zIndex).toBe('2000');

    const template2 = TestBed.createComponent(DummyTemplate2Component).componentInstance.template;
    service.attach(template2);

    fixture.detectChanges();
    expect(fixture.nativeElement.children.length).toBe(2);
    expect(fixture.nativeElement.children[1].style.zIndex).toBe('1000');
  });
});
