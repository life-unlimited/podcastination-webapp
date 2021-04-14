import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { EmbedPodcastComponent } from './embed-podcast.component';
import { EpisodeComponentComponent } from './episode-component/episode-component.component';

@NgModule({
  declarations: [EmbedPodcastComponent, EpisodeComponentComponent],
  imports: [
    CoreModule
  ]
})
export class EmbedPodcastModule {
}
