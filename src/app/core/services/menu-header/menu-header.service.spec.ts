import { TestBed } from '@angular/core/testing';

import { MenuHeaderService } from './menu-header.service';

describe('MenuService', () => {
  let service: MenuHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
