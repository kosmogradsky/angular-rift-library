import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RiftModule } from 'angular-rift';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RiftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
