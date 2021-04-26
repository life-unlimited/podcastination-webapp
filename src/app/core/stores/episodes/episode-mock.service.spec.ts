import { TestBed } from '@angular/core/testing';

import { EpisodeMockService } from './episode-mock.service';

describe('EpisodeMockService', () => {
  let service: EpisodeMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
