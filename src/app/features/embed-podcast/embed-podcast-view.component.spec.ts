import { EmbedPodcastView } from './embed-podcast-view.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { EmbedPodcastModule } from './embed-podcast.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutes } from '../../core/constants/routes';

describe('EmbedPodcastView', () => {
  let spectator: SpectatorRouting<EmbedPodcastView>;
  let component: EmbedPodcastView;
  const createComponent = createRoutingFactory({
    component: EmbedPodcastView,
    imports: [EmbedPodcastModule, HttpClientTestingModule],
    routes: AppRoutes,
    stubsEnabled: false
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
