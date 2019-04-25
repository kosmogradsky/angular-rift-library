import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDirective } from './content.directive';
import { OutletComponent } from './outlet/outlet.component';
import { RiftService } from './rift.service';

@NgModule({
  declarations: [
    ContentDirective,
    OutletComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RiftService
  ],
  exports: [
    ContentDirective,
    OutletComponent
  ]
})
export class RiftModule { }
