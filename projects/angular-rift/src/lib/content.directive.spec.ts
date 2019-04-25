import { ContentDirective } from './content.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { RiftService } from './rift.service';

@Component({
  template: `
    <ng-template riftContent [zIndex]="2000" *ngIf="isRiftMounted" #template></ng-template>
  `
})
class DummyRiftComponent {
  @ViewChild('template') template!: TemplateRef<unknown>;

  isRiftMounted = true;
}

describe('ContentDirective', () => {
  let service: RiftService;
  let fixture: ComponentFixture<DummyRiftComponent>;

  beforeEach(async(() => {
    service = new RiftService();

    TestBed.configureTestingModule({
      declarations: [ContentDirective, DummyRiftComponent],
      providers: [{ provide: RiftService, useValue: service }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyRiftComponent);
  }));

  it('should attach on init and detach on destroy', () => {
    const attachSpy = spyOn(service, 'attach');
    const detachSpy = spyOn(service, 'detach');

    fixture.detectChanges();
    const template = fixture.componentInstance.template;
    expect(attachSpy).toHaveBeenCalledWith(template, 2000);

    fixture.componentInstance.isRiftMounted = false;
    fixture.detectChanges();
    expect(detachSpy).toHaveBeenCalledWith(template);
  });
});
