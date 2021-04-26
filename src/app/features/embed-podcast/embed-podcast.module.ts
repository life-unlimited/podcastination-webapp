import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { EmbedPodcastComponent } from './embed-podcast.component';
import { EpisodeComponent } from './episode/episode.component';
import { EllipsisModule } from 'ngx-ellipsis';
import { SeasonComponent } from './season/season.component';
import { NoSeasonsComponent } from './no-seasons/no-seasons.component';
import { NoEpisodesComponent } from './no-episodes/no-episodes.component';
import { MissingPodcastKeyComponent } from './missing-podcast-key/missing-podcast-key.component';

@NgModule({
  declarations: [EmbedPodcastComponent, EpisodeComponent, SeasonComponent, NoSeasonsComponent, NoEpisodesComponent, MissingPodcastKeyComponent],
  exports: [
    EmbedPodcastComponent
  ],
  imports: [
    CoreModule,
    EllipsisModule
  ]
})
export class EmbedPodcastModule {
}
