import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-trending-activities',
  templateUrl: './trending-activities.component.html',
  styleUrls: ['./trending-activities.component.scss']
})
export class TrendingActivitiesComponent {
  @HostBinding('class.trending') public readonly trending = true;

}
