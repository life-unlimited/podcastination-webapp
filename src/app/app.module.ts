import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { EmbedPodcastModule } from './features/embed-podcast/embed-podcast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FeaturesModule,
        EmbedPodcastModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
