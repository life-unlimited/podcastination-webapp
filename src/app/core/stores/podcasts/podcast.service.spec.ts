import { PodcastService } from './podcast.service';
import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';

describe('PodcastService', () => {
  let spectator: SpectatorHttp<PodcastService>;
  let service: PodcastService;
  const createService = createHttpFactory({
    service: PodcastService
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
