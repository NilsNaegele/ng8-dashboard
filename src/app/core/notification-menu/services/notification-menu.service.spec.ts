import { TestBed } from '@angular/core/testing';

import { NotificationMenuService } from './notification-menu.service';

describe('NotificationMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationMenuService = TestBed.get(NotificationMenuService);
    expect(service).toBeTruthy();
  });
});
