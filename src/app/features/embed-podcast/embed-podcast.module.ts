import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { EmbedPodcastComponent } from './embed-podcast.component';
import { EpisodeComponent } from './episode/episode.component';
import { EllipsisModule } from 'ngx-ellipsis';
import { SeasonComponent } from './season/season.component';

@NgModule({
  declarations: [EmbedPodcastComponent, EpisodeComponent, SeasonComponent],
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
