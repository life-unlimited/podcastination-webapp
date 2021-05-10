import { PodcastContentComponent } from './podcast-content.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { PodcastContentModule } from './podcast-content.module';
import { SeasonService } from '../../stores/seasons/season.service';
import { PodcastService } from '../../stores/podcasts/podcast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PodcastContentComponent', () => {
  let spectator: SpectatorRouting<PodcastContentComponent>;
  let component: PodcastContentComponent;
  const createComponent = createRoutingFactory({
    component: PodcastContentComponent,
    imports: [PodcastContentModule, HttpClientTestingModule],
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
