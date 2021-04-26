import { TestBed } from '@angular/core/testing';

import { PodcastMockService } from './podcast-mock.service';

describe('PodcastMockService', () => {
  let service: PodcastMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
