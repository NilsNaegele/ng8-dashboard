import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {
  public getDaySchedule() {
    return { myDay: [
      {
        name: 'Coding',
        value: 6
      },
      {
        name: 'Eating',
        value: 1
      },
      {
        name: 'Sleeping',
        value: 8,
      },
      {
        name: 'Meditation',
        value: 1,
      },
      {
        name: 'Fighting Evil',
        value: 6
      },
    ]
  };
  }
}
