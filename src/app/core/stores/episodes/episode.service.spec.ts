import { EpisodeService } from './episode.service';
import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';

describe('EpisodeService', () => {
  let spectator: SpectatorHttp<EpisodeService>;
  let service: EpisodeService;
  const createService = createHttpFactory({
    service: EpisodeService
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
