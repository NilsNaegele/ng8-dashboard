import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardBodyComponent {
  @HostBinding('class.mdl-card__supporting-text') public readonly mdlCardSupportingText = true;

  @HostBinding('class.mdl-card--expand') public isExpanded = false;

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }

}
