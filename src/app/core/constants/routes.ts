import { Routes } from '@angular/router';
import { EmbedComponent } from '../components/embed/embed.component';
import { PodcastContentComponent } from '../components/podcast-content/podcast-content.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ListenComponent } from '../../features/listen/listen/listen.component';
import { PodcastView } from '../../features/listen/podcast/podcast-view.component';
import { HomeLayoutComponent } from '../components/home-layout/home-layout.component';
import { EmbedPodcastView } from '../../features/embed-podcast/embed-podcast-view.component';

/**
 * The routes that are used in {@link AppModule}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export const AppRoutes: Routes = [
  {
    path: 'embed',
    component: EmbedComponent,
    children: [
      {
        path: 'podcast/by-key/:key',
        component: EmbedPodcastView
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'podcasts',
        component: ListenComponent
      },
      {
        path: 'podcasts/:id',
        component: PodcastView
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'podcasts'
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
