import { ContentDirective } from './content.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { RiftService, defaultOutletName } from './rift.service';

@Component({
  template: `
    <ng-template [riftContent]="outletName" *ngIf="isRiftMounted" #template></ng-template>
  `
})
class DummyRiftSpecifiedNameComponent {
  @ViewChild('template') template!: TemplateRef<unknown>;

  isRiftMounted = true;
  outletName = 'myOutlet';
}

@Component({
  template: `
    <ng-template riftContent *ngIf="isRiftMounted" #template></ng-template>
  `
})
class DummyRiftDefaultNameComponent {
  @ViewChild('template') template!: TemplateRef<unknown>;

  isRiftMounted = true;
  outletName = 'myOutlet';
}

describe('ContentDirective with specified outletName', () => {
  let service: RiftService;
  let fixture: ComponentFixture<DummyRiftSpecifiedNameComponent>;
  let attachSpy: jasmine.Spy;
  let detachSpy: jasmine.Spy;
  let template: TemplateRef<unknown>;

  beforeEach(async(() => {
    service = new RiftService();
    attachSpy = spyOn(service, 'attach');
    detachSpy = spyOn(service, 'detach');

    TestBed.configureTestingModule({
      declarations: [ContentDirective, DummyRiftSpecifiedNameComponent],
      providers: [{ provide: RiftService, useValue: service }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyRiftSpecifiedNameComponent);
    fixture.detectChanges();

    template = fixture.componentInstance.template;
  }));

  it('should attach on init and detach on destroy', () => {
    expect(attachSpy).toHaveBeenCalledTimes(1);
    expect(attachSpy).toHaveBeenCalledWith(template, 'myOutlet');

    fixture.componentInstance.isRiftMounted = false;
    fixture.detectChanges();
    expect(detachSpy).toHaveBeenCalledWith(template, 'myOutlet');
  });

  it('should correctly reattach on outletName change', () => {
    fixture.componentInstance.outletName = 'mySecondOutlet';

    fixture.detectChanges();
    expect(detachSpy).toHaveBeenCalledWith(template, 'myOutlet');
    expect(attachSpy).toHaveBeenCalledWith(template, 'mySecondOutlet');
  });
});

describe('ContentDirective with default outletName', () => {
  let service: RiftService;
  let fixture: ComponentFixture<DummyRiftDefaultNameComponent>;
  let attachSpy: jasmine.Spy;
  let detachSpy: jasmine.Spy;
  let template: TemplateRef<unknown>;

  beforeEach(async(() => {
    service = new RiftService();
    attachSpy = spyOn(service, 'attach');
    detachSpy = spyOn(service, 'detach');

    TestBed.configureTestingModule({
      declarations: [ContentDirective, DummyRiftDefaultNameComponent],
      providers: [{ provide: RiftService, useValue: service }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyRiftDefaultNameComponent);
    fixture.detectChanges();

    template = fixture.componentInstance.template;
  }));

  it('should attach on init and detach on destroy', () => {
    expect(attachSpy).toHaveBeenCalledTimes(1);
    expect(attachSpy).toHaveBeenCalledWith(template, defaultOutletName);

    fixture.componentInstance.isRiftMounted = false;
    fixture.detectChanges();
    expect(detachSpy).toHaveBeenCalledWith(template, defaultOutletName);
  });
});
