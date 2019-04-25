import { Component, OnInit, Input } from '@angular/core';
import { RiftService, defaultOutletName } from '../rift.service';

@Component({
  selector: 'rift-outlet',
  templateUrl: './outlet.component.html',
})
export class OutletComponent implements OnInit {
  @Input() name = defaultOutletName;
  rift$ = this.riftService.createdRifts;

  constructor(
    public riftService: RiftService
  ) { }

  ngOnInit() {
  }

}
