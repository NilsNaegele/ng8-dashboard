import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mount-everest-card',
  templateUrl: './mount-everest-card.component.html',
  styleUrls: ['./mount-everest-card.component.scss']
})
export class MountEverestCardComponent {
  @HostBinding('class.mounteverest') public readonly mounteverest = true;

}
