import { EmbedPodcastComponent } from './embed-podcast.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { EmbedPodcastModule } from './embed-podcast.module';
import { SeasonService } from '../../core/stores/seasons/season.service';
import { PodcastService } from '../../core/stores/podcasts/podcast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmbedPodcastComponent', () => {
  let spectator: SpectatorRouting<EmbedPodcastComponent>;
  let component: EmbedPodcastComponent;
  const createComponent = createRoutingFactory({
    component: EmbedPodcastComponent,
    imports: [EmbedPodcastModule, HttpClientTestingModule],
    providers: [PodcastService, SeasonService],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
