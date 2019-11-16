import { Component, OnInit, HostBinding, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-card app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardActionsComponent {
  @HostBinding('class.mdl-card__actions') public readonly mdlCardActions = true;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

}
