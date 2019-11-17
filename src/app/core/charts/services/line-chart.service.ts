import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
  public getTopYearProgresses() {
    return { topActivities: [
      {
        name: 'Development',
        series: [
          {
            name: '1 January 2019',
            value: 730
          },
          {
            name: 'Today',
            value: 894
          }
        ]
      },
      {
        name: 'Organization',
        series: [
          {
            name: '1 January 2019',
            value: 787
          },
          {
            name: 'Today',
            value: 827
          }
        ]
      },
      {
        name: 'Presentations',
        series: [
          {
            name: '1 January 2019',
            value: 500
          },
          {
            name: 'Today',
            value: 780
          }
        ]
      },
      {
        name: 'Meetings',
        series: [
          {
            name: '1 January 2019',
            value: 575
          },
          {
            name: 'Today',
            value: 620
          }
        ]
      }
    ]
};
}
}
