import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs/operators';

import { RiftService } from './rift.service';
import { TemplateRef } from '@angular/core';

describe('RiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RiftService]
  }));

  it('should be created', () => {
    const service: RiftService = TestBed.get(RiftService);
    expect(service).toBeTruthy();
  });

  it('should correctly attach', done => {
    const service: RiftService = TestBed.get(RiftService);
    const createdRiftsSubscription = service.createdRifts.pipe(skip(1)).subscribe(rifts => {
      expect(rifts).toEqual([{ template: {} as TemplateRef<unknown> }]);
      createdRiftsSubscription.unsubscribe();
      done();
    });

    service.attach({} as TemplateRef<unknown>);
  });

  it('should correctly detach', done => {
    const template1 = {} as TemplateRef<unknown>;
    const template2 = {} as TemplateRef<unknown>;

    const service: RiftService = TestBed.get(RiftService);
    const createdRiftsSubscription = service.createdRifts.pipe(skip(3)).subscribe(rifts => {
      expect(rifts).toEqual([{ template: template2 }]);
      createdRiftsSubscription.unsubscribe();
      done();
    });

    service.attach(template1);
    service.attach(template2);
    service.detach(template1);
  });
});
