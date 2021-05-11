import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Episode } from '../../../models/episode';
import { Season } from '../../../models/seasons';
import { prettifyDuration } from '../../../utils/time-utils';
import { environment } from '../../../../../environments/environment';

/**
 * Episode row with integrated audio player.
 *
 * @author Lennart Altenhof
 * @version 1.1
 */
@Component({
  selector: 'app-podcast-content-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  player = new Audio();
  stopped = true;
  positionRelative = 0;
  isPlaying = false;
  staticUrl = environment.staticUrl;

  @Input() data: {
    episode: Episode,
    season: Season
  };

  isLoading = false;

  ngOnInit(): void {
    this.player.addEventListener('timeupdate', () => {
      this.positionRelative = this.player.currentTime / this.player.duration;
      this.changeDetectorRef.detectChanges();
    });
  }

  prettifyDuration(ms: number): string {
    return prettifyDuration(ms);
  }

  /**
   * Loads and plays the mp3.
   */
  private stream(): void {
    this.isLoading = true;
    this.load(this.getFullMp3Url());
    this.player.onloadedmetadata = () => {
      this.isLoading = false;
      this.changeDetectorRef.detectChanges();
      this.player.play().then(() => {
        this.isPlaying = true;
      }).catch(error => {
        // We expect the error because for whatever reason we always get one.
        console.log(error);
        this.isPlaying = true;
      });
    };
  }

  /**
   * Returns the full current episode's mp3 location.
   */
  getFullMp3Url(): string {
    if (!this.data) {
      return undefined;
    }
    return `${ environment.staticUrl }/${ this.data.episode.mp3Location }`;
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
}
