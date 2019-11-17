import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { PieChartService } from '../services/pie-chart.service';

// import { PieChartService } from '../services/pie-chart.service';

// import * as d3 from 'd3';
// import * as nv from 'nvd3';


// // @Component({
// //   template: '',
// // })
// // export abstract class BaseChartComponent {
// //   @HostBinding('class.pie-chart__container') private readonly pieChartContainer = true;
// // }

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    myDay: any;

    view: any[] = [350, 350];

    // options
    showLegend = false;

    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ff0000']
    };

    // pie
    showLabels = false;
    explodeSlices = true;
    doughnut = true;
    gradient = false;

    constructor(private pieChartService: PieChartService) {
        Object.assign(this, this.pieChartService.getDaySchedule());
    //   console.log({myDay});
    }

    ngOnInit() {
        // this.myDay = this.pieChartService.getDaySchedule();
        // this.myDay = {myDay};
        // console.log(this.myDay);
    }

    onSelect(event) {
      console.log(event);
    }

}
