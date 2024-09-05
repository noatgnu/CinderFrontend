import { TestBed } from '@angular/core/testing';

import { CollateService } from './collate.service';

describe('CollateService', () => {
  let service: CollateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
