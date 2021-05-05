import { NgModule } from '@angular/core';
import { ListenComponent } from './listen/listen.component';
import { PodcastEntryComponent } from './podcast-entry/podcast-entry.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastService } from '../../core/stores/podcasts/podcast.service';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListenComponent,
    PodcastEntryComponent,
    PodcastComponent
  ],
  imports: [
    CoreModule,
    RouterModule
  ],
  providers: [
    PodcastService
  ]
})
export class ListenModule {
}
