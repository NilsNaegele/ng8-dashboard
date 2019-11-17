import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationMenuService {
  public getNotifications(): object[] {
    return [
      {
        text: 'You have 3 new tasks.',
        time: 'just now',
        icon: 'plus_one',
        color: 'primary'
      }, {
        text: 'Server error',
        time: '3 min',
        icon: 'error_outline',
        color: 'secondary'
      }, {
        text: 'GTx New release!',
        time: '3 hours',
        icon: 'new_releases',
        color: 'primary'
      }, {
        text: 'You have 5 new mails.',
        time: '7 days',
        icon: 'mail_outline',
        color: 'primary'
      },
    ];
  }
}
