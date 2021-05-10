import { NgModule } from '@angular/core';
import { CoreModule } from '../../core.module';
import { PodcastContentComponent } from './podcast-content.component';
import { EpisodeComponent } from './episode/episode.component';
import { EllipsisModule } from 'ngx-ellipsis';
import { SeasonComponent } from './season/season.component';
import { NoSeasonsComponent } from './no-seasons/no-seasons.component';
import { NoEpisodesComponent } from './no-episodes/no-episodes.component';

@NgModule({
  declarations: [PodcastContentComponent, EpisodeComponent, SeasonComponent, NoSeasonsComponent, NoEpisodesComponent],
  exports: [
    PodcastContentComponent
  ],
  imports: [
    CoreModule,
    EllipsisModule
  ]
})
export class PodcastContentModule {
}
