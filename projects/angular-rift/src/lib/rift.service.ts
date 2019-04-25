import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Rift {
  template: TemplateRef<unknown>;
  zIndex: number;
}

@Injectable()
export class RiftService {
  private createdRiftsSubject: BehaviorSubject<Rift[]> = new BehaviorSubject([] as Rift[]);
  readonly createdRifts: Observable<Rift[]> = this.createdRiftsSubject.asObservable();

  constructor() { }

  attach(template: TemplateRef<unknown>, zIndex = 1000) {
    this.createdRiftsSubject.next(this.createdRiftsSubject.getValue().concat({
      template,
      zIndex
    }));
  }

  detach(templateToDetach: TemplateRef<any>) {
    this.createdRiftsSubject.next(
      this.createdRiftsSubject.getValue().filter(rift => rift.template !== templateToDetach)
    );
  }
}
