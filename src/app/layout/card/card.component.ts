import { Component, OnInit, HostBinding, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @HostBinding('class.mdl-card') public readonly mdlCard = true;
  @HostBinding('class.mdl-shadow--2dp') public readonly mdlShadow2DP = true;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

}
