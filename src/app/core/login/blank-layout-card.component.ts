import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from './upgradable.component';

@Component({
  template: '',
})
export class BlankLayoutCardComponent extends UpgradableComponent {
  @HostBinding('class.blank-layout-card') public readonly blankLayoutCard = true;
}
