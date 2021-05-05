import { Component, Input, OnInit } from '@angular/core';
import { Season } from '../../../models/seasons';
import { EpisodeService } from '../../../stores/episodes/episode.service';
import { Episode } from '../../../models/episode';

@Component({
  selector: 'app-podcast-content-season',
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
