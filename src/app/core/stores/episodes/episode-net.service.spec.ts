import { TestBed } from '@angular/core/testing';

import { EpisodeNetService } from './episode-net.service';

describe('EpisodeNetService', () => {
  let service: EpisodeNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
