import { Directive, Input, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { RiftService } from './rift.service';

@Directive({
  selector: '[riftContent]'
})
export class ContentDirective implements OnInit, OnDestroy {
  @Input() zIndex: number | undefined;

  constructor(
    private riftService: RiftService,
    private template: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.riftService.attach(this.template, this.zIndex);
  }

  ngOnDestroy() {
    this.riftService.detach(this.template);
  }
}
