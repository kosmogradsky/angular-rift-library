import { Component, OnInit } from '@angular/core';
import { RiftService } from '../rift.service';

@Component({
  selector: 'rift-outlet',
  templateUrl: './outlet.component.html',
})
export class OutletComponent implements OnInit {
  rift$ = this.riftService.createdRifts;

  constructor(
    public riftService: RiftService
  ) { }

  ngOnInit() {
  }

}
