import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ListenModule } from './listen/listen.module';
import { EmbedPodcastModule } from './embed-podcast/embed-podcast.module';
import { EmbedPodcastView } from './embed-podcast/embed-podcast-view.component';
import { PodcastContentModule } from '../core/components/podcast-content/podcast-content.module';


@NgModule({
  declarations: [
    EmbedPodcastView
  ],
  imports: [
    CoreModule,
    EmbedPodcastModule,
    ListenModule,
    PodcastContentModule
  ]
})
export class FeaturesModule {
}
