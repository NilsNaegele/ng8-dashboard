import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @HostBinding('class.weather') public readonly weather = true;

}
