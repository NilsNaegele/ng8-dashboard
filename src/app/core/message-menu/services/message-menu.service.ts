import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageMenuService {
  public getMessages(): object[] {
    return [
      {
        name: 'Alena',
        type: 'Birthday Party',
        time: 'just now',
        icon: 'A',
        color: 'primary',
      },
      {
        name: 'Andrew',
        type: 'Deployment',
        time: 'just now',
        icon: 'A',
        color: 'primary',
      },
      {
        name: 'Nick',
        type: 'No theme',
        time: '15 min',
        icon: 'N',
        color: 'baby-blue',
      },
      {
        name: 'Dennis',
        type: 'Suggestion',
        time: '10 hours',
        icon: 'D',
        color: 'cerulean',
      },
      {
        name: 'Barbara',
        type: 'New design',
        time: '30 Dec',
        icon: 'B',
        color: 'mint',
      },
    ];
  }
}
