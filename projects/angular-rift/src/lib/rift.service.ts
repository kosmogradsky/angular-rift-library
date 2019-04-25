import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Rift {
  template: TemplateRef<unknown>;
}

export const defaultOutletName = 'default';

@Injectable()
export class RiftService {
  private createdRiftsSubject: BehaviorSubject<Record<string, Rift[] | undefined>> = new BehaviorSubject({});
  readonly createdRifts: Observable<Record<string, Rift[] | undefined>> = this.createdRiftsSubject.asObservable();

  constructor() { }

  attach(template: TemplateRef<unknown>, outletName = defaultOutletName) {
    const riftsBefore = this.createdRiftsSubject.getValue();
    const riftsInThatOutlet = riftsBefore[outletName] || [];

    this.createdRiftsSubject.next({
      ...riftsBefore,
      [outletName]: [
        ...riftsInThatOutlet,
        { template }
      ]
    });
  }

  detach(templateToDetach: TemplateRef<any>, outletName = defaultOutletName) {
    const riftsBefore = this.createdRiftsSubject.getValue();
    const riftsInThatOutlet = riftsBefore[outletName];

    if (riftsInThatOutlet) {
      this.createdRiftsSubject.next({
        ...riftsBefore,
        [outletName]: riftsInThatOutlet.filter(rift => rift.template !== templateToDetach)
      });
    }
  }
}
