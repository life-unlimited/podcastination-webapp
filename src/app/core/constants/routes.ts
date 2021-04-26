import { Routes } from '@angular/router';
import { EmbedComponent } from '../components/embed/embed.component';
import { EmbedPodcastComponent } from '../../features/embed-podcast/embed-podcast.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

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
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
