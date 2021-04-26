import { SeasonComponent } from './season.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EmbedPodcastModule } from '../embed-podcast.module';
import { Season } from '../../../core/models/seasons';
import { EpisodeService } from '../../../core/stores/episodes/episode.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeasonComponent', () => {
  let spectator: Spectator<SeasonComponent>;
  let component: SeasonComponent;
  const createComponent = createComponentFactory({
    component: SeasonComponent,
    imports: [EmbedPodcastModule, HttpClientTestingModule],
    providers: [EpisodeService]
  });
  let season: Season;

  beforeEach(() => {
    season = {
      id: 1,
      title: '2021',
      subtitle: 'Das Jahr 2021',
      description: 'Ich bin eine sinnlose Beschreibung',
      imageLocation: '/1/s-2021/thumb.png',
      key: '2021',
      num: 3,
      podcastId: 1
    };
    spectator = createComponent({
      props: {
        season
      }
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
