import { SeasonService } from './season.service';
import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';

describe('SeasonNetService', () => {
  let spectator: SpectatorHttp<SeasonService>;
  let service: SeasonService;
  const createService = createHttpFactory({
    service: SeasonService
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
