import { TestBed } from '@angular/core/testing';

import { RegExpValidatorsService } from './reg-exp-validators.service';

describe('RegExpValidatorsService', () => {
  let service: RegExpValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegExpValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
