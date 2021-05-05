import { Component, Input, OnInit } from '@angular/core';
import { PodcastService } from '../../stores/podcasts/podcast.service';
import { ActivatedRoute } from '@angular/router';
import { Podcast } from '../../models/podcast';
import { Season } from '../../models/seasons';
import { switchMap, tap } from 'rxjs/operators';
import { SeasonService } from '../../stores/seasons/season.service';

/**
 * The component for displaying podcast content.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-podcast-content',
  templateUrl: './podcast-content.component.html',
  styleUrls: ['./podcast-content.component.css']
})
export class PodcastContentComponent implements OnInit {

  constructor(private podcastService: PodcastService, private seasonService: SeasonService, private route: ActivatedRoute) {
  }

  podcast: Podcast;
  seasons: Season[];

  @Input() podcastId: number;

  ngOnInit(): void {
    if (this.podcastId) {
      this.loadPodcast(this.podcastId);
    }
  }

  /**
   * Loads the podcast with the given id.
   *
   * @param id The podcast id.
   * @private
   */
  private loadPodcast(id: number): void {
    this.podcastService.getById(id).pipe(
      tap(podcast => this.podcast = podcast),
      switchMap((podcast: Podcast) => this.seasonService.getAllByPodcast(podcast.id))
    ).subscribe(seasons => this.seasons = seasons);
  }

}
