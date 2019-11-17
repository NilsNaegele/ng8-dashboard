import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-admin-dashboard';
  // @HostBinding('class.mdl-layout__header-row') public readonly mdlLayoutHeaderRow = true;

  constructor(private router: Router) {
  }

  navigate(destination: string): void {
    this.router.navigate([destination]);
  }

}
