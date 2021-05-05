import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { EmbedPodcastModule } from './embed-podcast/embed-podcast.module';
import { ListenModule } from './listen/listen.module';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    EmbedPodcastModule,
    ListenModule
  ]
})
export class FeaturesModule {
}
