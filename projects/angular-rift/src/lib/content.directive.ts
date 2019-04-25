import { Directive, Input, TemplateRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { RiftService, defaultOutletName } from './rift.service';

@Directive({
  selector: '[riftContent]'
})
export class ContentDirective implements OnDestroy, OnChanges {
  @Input() riftContent: string | undefined;

  constructor(
    private riftService: RiftService,
    private template: TemplateRef<any>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const previousValue: string | undefined = changes.riftContent.previousValue;
    const currentValue: string = changes.riftContent.currentValue || defaultOutletName;

    if (previousValue !== currentValue) {
      this.riftService.detach(this.template, previousValue);

      if (currentValue) {
        this.riftService.attach(this.template, currentValue);
      }
    }
  }

  ngOnDestroy() {
    this.riftService.detach(this.template, this.riftContent || defaultOutletName);
  }
}
