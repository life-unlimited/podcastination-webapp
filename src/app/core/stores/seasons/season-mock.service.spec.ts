import { TestBed } from '@angular/core/testing';

import { SeasonMockService } from './season-mock.service';

describe('SeasonMockService', () => {
  let service: SeasonMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
