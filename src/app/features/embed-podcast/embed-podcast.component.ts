import { Component, OnDestroy, OnInit } from '@angular/core';
import { PodcastService } from '../../core/stores/podcasts/podcast.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Podcast } from '../../core/models/podcast';
import { Season } from '../../core/models/seasons';
import { switchMap, tap } from 'rxjs/operators';
import { SeasonService } from '../../core/stores/seasons/season.service';

/**
 * The component for embedding a podcast.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-embed-podcast',
  templateUrl: './embed-podcast.component.html',
  styleUrls: ['./embed-podcast.component.css']
})
export class EmbedPodcastComponent implements OnInit, OnDestroy {

  constructor(private podcastService: PodcastService, private seasonService: SeasonService, private route: ActivatedRoute) {
  }

  private s: Subscription[] = [];
  podcast: Podcast;
  seasons: Season[];
  podcastKey: string;

  ngOnInit(): void {
    this.s.push(this.route.paramMap.subscribe(params => {
      const key = params.get('key');
      this.podcastKey = key;
      this.loadPodcast(key);
    }));
  }

  /**
   * Loads the podcast with the given key.
   * @param key
   * @private
   */
  private loadPodcast(key: string): void {
    this.podcastService.getByKey(key).pipe(
      tap(podcast => this.podcast = podcast),
      switchMap((podcast: Podcast) => this.seasonService.getAllByPodcast(podcast.id))
    ).subscribe(seasons => this.seasons = seasons);
  }

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }

}
