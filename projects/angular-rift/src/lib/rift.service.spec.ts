import { TestBed } from '@angular/core/testing';
import { skip, take } from 'rxjs/operators';

import { RiftService, defaultOutletName } from './rift.service';
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
    const template = {} as TemplateRef<unknown>;

    service.createdRifts.pipe(skip(1), take(1)).subscribe(rifts => {
      expect(rifts).toEqual({
        [defaultOutletName]: [
          { template }
        ]
      });
    });

    service.createdRifts.pipe(skip(2), take(1)).subscribe(rifts => {
      expect(rifts).toEqual({
        [defaultOutletName]: [
          { template },
          { template }
        ]
      });
    });

    service.createdRifts.pipe(skip(3), take(1)).subscribe(rifts => {
      expect(rifts).toEqual({
        [defaultOutletName]: [
          { template },
          { template }
        ],
        myOutlet: [
          { template }
        ]
      });
      done();
    });

    service.attach(template);
    service.attach(template);
    service.attach(template, 'myOutlet');
  });

  it('should correctly detach', done => {
    const template = {} as TemplateRef<unknown>;
    const service: RiftService = TestBed.get(RiftService);

    service.createdRifts.pipe(skip(3), take(1)).subscribe(rifts => {
      expect(rifts).toEqual({
        [defaultOutletName]: [],
        myOutlet: [{ template }]
      });
    });

    service.createdRifts.pipe(skip(4), take(1)).subscribe(rifts => {
      expect(rifts).toEqual({
        [defaultOutletName]: [],
        myOutlet: []
      });
      done();
    });

    service.attach(template);
    service.attach(template, 'myOutlet');
    service.detach(template);
    service.detach(template, 'myOutlet');
  });
});
