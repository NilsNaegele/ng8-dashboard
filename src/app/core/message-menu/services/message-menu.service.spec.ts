import { TestBed } from '@angular/core/testing';

import { MessageMenuService } from './message-menu.service';

describe('MessageMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageMenuService = TestBed.get(MessageMenuService);
    expect(service).toBeTruthy();
  });
});
