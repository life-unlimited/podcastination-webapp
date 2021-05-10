import { EpisodeComponent } from './episode.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { PodcastContentModule } from '../podcast-content.module';
import { Episode } from '../../../models/episode';
import { Season } from '../../../models/seasons';

describe('EpisodeComponent', () => {
  let spectator: Spectator<EpisodeComponent>;
  let component: EpisodeComponent;
  const createComponent = createComponentFactory({
    component: EpisodeComponent,
    imports: [PodcastContentModule],
  });
  let episode: Episode;
  let season: Season;

  beforeEach(() => {
    episode = {
      id: 2,
      title: 'Ich bin ein Titel',
      subtitle: 'Ich bin ein interessanter untertitel',
      date: '2021-04-02',
      author: 'Lennart Altenhof',
      description: 'Ich bin ein sehr informativer Text, der mega interessant zu lesen ist und auch eigentlich so.',
      imageLocation: '/1/blablabla/thumb.png',
      mp3Location: '/1/blablabla/die-datei.mp3',
      mp3Length: 1234,
      seasonId: 3,
      num: 3,
      youTubeUrl: 'https://youtube.com/blabla-ich-bin-ein-video',
    };
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
        data: { episode, season }
      }
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
