import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { PodcastContentModule } from './core/components/podcast-content/podcast-content.module';
import { AppRoutes } from './core/constants/routes';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SeasonService } from './core/stores/seasons/season.service';
import { EpisodeService } from './core/stores/episodes/episode.service';
import { PodcastService } from './core/stores/podcasts/podcast.service';

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
    PodcastContentModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    PodcastService,
    SeasonService,
    EpisodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
