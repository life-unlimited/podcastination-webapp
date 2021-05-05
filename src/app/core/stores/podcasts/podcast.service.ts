import { Injectable } from '@angular/core';
import { Podcast } from '../../models/podcast';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface PodcastNet {
  id: number;
  title: string;
  subtitle: string;
  language: string;
  owner_id: number;
  description: string;
  keywords: string[];
  link: string;
  feed_link: string;
  image_location: string;
  podcast_type: string;
  key: string;
}

function mapFromPodcastNet(net: PodcastNet): Podcast {
  return {
    description: net.description,
    feedLink: net.feed_link,
    id: net.id,
    imageLocation: net.image_location,
    key: net.key,
    keywords: net.keywords,
    language: net.language,
    link: net.link,
    owner: net.owner_id,
    podcastType: net.podcast_type,
    subtitle: net.subtitle,
    title: net.title
  };
}

/**
 * Service for querying podcasts in general.
 *
 * @author Lennart Altenhof
 * @version 1.1
 */
@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves a podcast by the given key.
   *
   * @param key The podcast key.
   */
  getByKey(key: string): Observable<Podcast> {
    return this.http.get<PodcastNet>(`${ environment.apiUrl }/podcasts/by-key/${ key }`)
      .pipe(map(mapFromPodcastNet));
  }

  /**
   * Retrieves all available podcasts.
   */
  getAll(): Observable<Podcast[]> {
    return this.http.get<PodcastNet[]>(`${ environment.apiUrl }/podcasts`).pipe(
      map(result => result.map(mapFromPodcastNet))
    );
  }

}
