import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>normal div</div>
    <div *riftContent>rifted div</div>

    <rift-outlet></rift-outlet>
  `,
  styles: []
})
export class AppComponent {
}
