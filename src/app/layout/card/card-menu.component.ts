import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardMenuComponent {

  @HostBinding('class.mdl-card__menu') public readonly mdlCardMenu = true;

}
