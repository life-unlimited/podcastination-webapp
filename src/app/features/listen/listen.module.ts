import { NgModule } from '@angular/core';
import { ListenComponent } from './listen/listen.component';
import { PodcastEntryComponent } from './podcast-entry/podcast-entry.component';
import { PodcastView } from './podcast/podcast-view.component';
import { PodcastService } from '../../core/stores/podcasts/podcast.service';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { PodcastContentModule } from '../../core/components/podcast-content/podcast-content.module';


@NgModule({
  declarations: [
    ListenComponent,
    PodcastEntryComponent,
    PodcastView
  ],
  imports: [
    CoreModule,
    RouterModule,
    PodcastContentModule
  ],
  providers: [
    PodcastService
  ]
})
export class ListenModule {
}
