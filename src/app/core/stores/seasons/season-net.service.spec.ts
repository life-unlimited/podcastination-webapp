import { TestBed } from '@angular/core/testing';

import { SeasonNetService } from './season-net.service';

describe('SeasonNetService', () => {
  let service: SeasonNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
