import { Component, OnDestroy, OnInit } from '@angular/core';
import { PodcastService } from '../../../core/stores/podcasts/podcast.service';
import { SeasonService } from '../../../core/stores/seasons/season.service';
import { EpisodeService } from '../../../core/stores/episodes/episode.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Podcast } from '../../../core/models/podcast';
import { Season } from '../../../core/models/seasons';
import { Episode } from '../../../core/models/episode';

@Component({
  selector: 'app-listen-podcast-view',
  templateUrl: './podcast-view.component.html',
  styleUrls: ['./podcast-view.component.scss']
})
export class PodcastView implements OnInit, OnDestroy {

  constructor(private podcastService: PodcastService, private seasonService: SeasonService,
              private episodeService: EpisodeService, private route: ActivatedRoute) {
  }

  podcast: Podcast;
  seasons: { season: Season, episodes: Episode[] }[];

  private s: Subscription[] = [];

  ngOnInit(): void {
    // Subscribe to param changes in order to update the podcast.
    this.s.push(this.route.paramMap.pipe(
      // Clear podcast and seasons.
      tap(() => {
        this.podcast = undefined;
        this.seasons = undefined;
      }),
      // Retrieve the podcast.
      switchMap(params => this.podcastService.getById(+params.get('id'))),
      tap(podcast => (this.podcast = podcast)),
      // Retrieve seasons.
      switchMap(podcast => this.seasonService.getAllByPodcast(podcast.id)),
      switchMap(seasons =>
        forkJoin(seasons.map(season =>
          forkJoin({
            season: of(season),
            episodes: this.episodeService.getAllBySeason(season.id)
          })))),
      // Set new seasons.
      tap(collected => collected.forEach(c => (this.seasons.push(c))))
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }
}
