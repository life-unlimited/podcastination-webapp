import { Routes } from '@angular/router';
import { EmbedComponent } from '../components/embed/embed.component';
import { EmbedPodcastComponent } from '../../features/embed-podcast/embed-podcast.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ListenComponent } from '../../features/listen/listen/listen.component';
import { PodcastComponent } from '../../features/listen/podcast/podcast.component';
import { HomeLayoutComponent } from '../components/home-layout/home-layout.component';

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
        component: EmbedPodcastComponent
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
        component: PodcastComponent
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
