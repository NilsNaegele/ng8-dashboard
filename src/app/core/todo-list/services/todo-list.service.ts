import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public getItems(): object[] {
    return [
      {
        title: 'Fix bug T274c45',
        id: 1234567890,
        completed: false,
      },
      {
        title: 'Implement 100% new feature',
        id: 1357913579,
        completed: false,
      },
      {
        title: 'Create prototype for app',
        id: 24801357901,
        completed: true,
      },
      {
        title: 'Read book on TDD',
        id: 9753101923,
        completed: false,
      },
      {
        title: 'Make new design',
        id: 3124569870,
        completed: false,
      },
    ];
  }
}
