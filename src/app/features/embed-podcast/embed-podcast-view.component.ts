import { Component, OnDestroy, OnInit } from '@angular/core';
import { PodcastService } from '../../core/stores/podcasts/podcast.service';
import { SeasonService } from '../../core/stores/seasons/season.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Podcast } from '../../core/models/podcast';

/**
 * View for embedding a podcast.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-embed-podcast-view',
  templateUrl: './embed-podcast-view.component.html',
  styleUrls: ['./embed-podcast-view.component.css']
})
export class EmbedPodcastView implements OnInit, OnDestroy {

  constructor(private podcastService: PodcastService, private seasonService: SeasonService, private route: ActivatedRoute) {
  }

  private s: Subscription[] = [];
  podcastKey: string;
  podcast: Podcast;

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
    this.podcastService.getByKey(key).subscribe(podcast => this.podcast = podcast);
  }

  ngOnDestroy(): void {
    this.s.forEach(s => s.unsubscribe());
  }

}
