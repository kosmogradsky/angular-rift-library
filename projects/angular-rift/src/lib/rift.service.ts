import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Rift {
  template: TemplateRef<unknown>;
}

@Injectable()
export class RiftService {
  private createdRiftsSubject: BehaviorSubject<Rift[]> = new BehaviorSubject([] as Rift[]);
  readonly createdRifts: Observable<Rift[]> = this.createdRiftsSubject.asObservable();

  constructor() { }

  attach(template: TemplateRef<unknown>) {
    this.createdRiftsSubject.next(this.createdRiftsSubject.getValue().concat({
      template
    }));
  }

  detach(templateToDetach: TemplateRef<any>) {
    this.createdRiftsSubject.next(
      this.createdRiftsSubject.getValue().filter(rift => rift.template !== templateToDetach)
    );
  }
}
