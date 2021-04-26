import { Component, Input, OnInit } from '@angular/core';
import { Season } from '../../../core/models/seasons';
import { EpisodeService } from '../../../core/stores/episodes/episode.service';
import { Episode } from '../../../core/models/episode';

@Component({
  selector: 'app-embed-podcast-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  @Input() season: Season;

  episodes: Episode[];

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    if (!this.season) {
      throw new Error('no season supplied');
    }
    this.episodeService.getAllBySeason(this.season.id).subscribe(episodes => this.episodes = episodes);
  }

}
