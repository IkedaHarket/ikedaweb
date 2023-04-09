import { TestBed } from '@angular/core/testing';

import { MenuDashboardService } from './menu-dashboard.service';

describe('MenuDashboardService', () => {
  let service: MenuDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
