import { PodcastView } from './podcast-view.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutes } from '../../../core/constants/routes';
import { ListenModule } from '../listen.module';

describe('PodcastView', () => {
  let spectator: SpectatorRouting<PodcastView>;
  let component: PodcastView;
  const createComponent = createRoutingFactory({
    component: PodcastView,
    imports: [ListenModule, HttpClientTestingModule],
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
