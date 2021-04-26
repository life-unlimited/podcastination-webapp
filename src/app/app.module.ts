import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { EmbedPodcastModule } from './features/embed-podcast/embed-podcast.module';
import { PodcastService } from './core/stores/podcasts/podcast.service';
import { PodcastNetService } from './core/stores/podcasts/podcast-net.service';
import { AppRoutes } from './core/constants/routes';
import { RouterModule } from '@angular/router';
import { SeasonService } from './core/stores/seasons/season.service';
import { SeasonNetService } from './core/stores/seasons/season-net.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EpisodeService } from './core/stores/episodes/episode.service';
import { EpisodeNetService } from './core/stores/episodes/episode-net.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    EmbedPodcastModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    { provide: PodcastService, useClass: PodcastNetService },
    { provide: SeasonService, useClass: SeasonNetService },
    { provide: EpisodeService, useClass: EpisodeNetService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
