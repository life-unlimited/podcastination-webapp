import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../../../core/stores/podcasts/podcast.service';
import { Podcast } from '../../../core/models/podcast';

/**
 * View that allows the user to select from available podcasts.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss']
})
export class ListenComponent implements OnInit {

  /**
   * The loaded podcasts.
   */
  podcasts: Podcast[];

  constructor(private podcastService: PodcastService) {
  }

  ngOnInit(): void {
    this.podcastService.getAll().subscribe(podcasts => (this.podcasts = podcasts));
  }

}
