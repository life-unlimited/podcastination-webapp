import { Injectable } from '@angular/core';
import { Podcast } from '../../models/podcast';
import { PodcastService } from './podcast.service';
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

@Injectable({
  providedIn: 'root'
})
export class PodcastNetService implements PodcastService {

  constructor(private http: HttpClient) {
  }

  getByKey(key: string): Observable<Podcast> {
    return this.http.get<PodcastNet>(`${ environment.apiUrl }/podcasts/by-key/${ key }`)
      .pipe(map(mapFromPodcastNet));
  }

}
