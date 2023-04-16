import { TestBed } from '@angular/core/testing';

import { FormValidators } from './form-validators';

describe('FormValidatorsService', () => {
  let service: FormValidators;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidators);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
