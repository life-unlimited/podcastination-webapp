import { ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Episode } from '../../../core/models/episode';
import { Season } from '../../../core/models/seasons';
import { prettifyDuration } from '../../../core/utils/time-utils';

@Component({
  selector: 'app-episode-component',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnChanges {

  constructor(private changeDetectorRef: ChangeDetectorRef, private zone: NgZone) {
  }

  player = new Audio();
  stopped = true;
  positionRelative = 0;
  isPlaying = false;

  @Input() data: {
    episode: Episode,
    season: Season
  } = {
    episode: {
      id: 2,
      title: 'Ich bin ein Titel',
      subtitle: 'Ich bin ein interessanter untertitel',
      date: '2021-04-02',
      author: 'Lennart Altenhof',
      description: 'Ich bin ein sehr informativer Text, der mega interessant zu lesen ist und auch eigentlich ziemlich lang ist, sodass ich gar nicht überall hinpassen sollte hahaaha, vielleicht juckt das auch niemanden, was hier steht.',
      imageLocation: '/1/blablabla/thumb.png',
      mp3Location: '/1/blablabla/die-datei.mp3',
      mp3Length: 1234,
      seasonId: 3,
      num: 3,
      youTubeUrl: 'https://youtube.com/blabla-ich-bin-ein-video',
    },
    season: {
      id: 1,
      title: '2021',
      subtitle: 'Das Jahr 2021',
      description: 'Ich bin eine sinnlose Beschreibung',
      imageLocation: '/1/s-2021/thumb.png',
      key: '2021',
      num: 3,
      podcastId: 1
    }
  };

  isLoaded = false;

  ngOnInit(): void {
    this.player.addEventListener('timeupdate', (currentTime) => {
      this.positionRelative = this.player.currentTime / this.player.duration;
      this.changeDetectorRef.detectChanges();
    });

    // TODO: remove
    this.load('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    this.player.onloadedmetadata = () => {
      this.isLoaded = true;
      this.changeDetectorRef.detectChanges();
      console.log('loaded metadata with duration ' + this.player.duration);
    };
  }

  prettifyDuration(ms: number): string {
    return prettifyDuration(ms);
  }

  private stream(): void {
    this.player.play().then(() => {
      this.isPlaying = true;
    }).catch(error => {
      // We expect the error because for whatever reason we always get one.
      console.log(error);
      this.isPlaying = true;
    });
  }

  onPlayClicked(event: MouseEvent): void {
    event.stopPropagation();
    this.play();
    console.log('on play');
  }

  play(): void {
    this.stopped = false;
    // Check if the source is set as then we are paused.
    if (this.player.src) {
      this.player.play().then();
      this.isPlaying = true;
    } else {
      this.stream();
    }
  }

  onSeekbarClicked(offsetWidth: number, seekbarWidth: number): void {
    console.log('seek clicked');
    this.seek(offsetWidth / seekbarWidth);
  }

  /**
   * Seeks to the given relative position in the audio object.
   *
   * @param relative The relative position.
   * @private
   */
  private seek(relative: number): void {
    // Check if not playing.
    if (this.player.paused) {
      return;
    }
    this.player.currentTime = this.player.duration * relative;
  }

  onPauseClicked(event: MouseEvent): void {
    if (!this.player.paused) {
      this.player.pause();
      this.isPlaying = false;
    }
    console.log('on pause');
    event.stopPropagation();
  }

  private load(mp3Url: string): void {
    this.player.src = mp3Url;
    this.player.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.load('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    }
  }

}
