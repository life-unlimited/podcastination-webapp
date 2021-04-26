import { TestBed } from '@angular/core/testing';

import { PodcastNetService } from './podcast-net.service';

describe('PodcastNetService', () => {
  let service: PodcastNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
