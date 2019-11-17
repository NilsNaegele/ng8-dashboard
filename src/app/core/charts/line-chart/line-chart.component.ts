import { AfterViewInit, OnInit, Component, ElementRef, HostBinding } from '@angular/core';
import { LineChartService } from '../services/line-chart.service';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  topActivities: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Activities';
  showYAxisLabel = true;
  yAxisLabel = 'Hours';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#bfefff']
  };

  // line, area
  autoScale = true;

  constructor(private lineChartService: LineChartService) {
    Object.assign(this, this.lineChartService.getTopYearProgresses());
  }

  onSelect(event) {
    console.log(event);
  }

}
