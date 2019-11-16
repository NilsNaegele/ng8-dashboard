import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-admin-dashboard';
  // @HostBinding('class.mdl-layout__header-row') protected readonly mdlLayoutHeaderRow = true;
}
