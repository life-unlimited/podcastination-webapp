import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from '../../models/seasons';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

interface SeasonNet {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_location: string;
  podcast_id: number;
  num: number;
  key: string;
}

function mapFromSeasonNet(net: SeasonNet): Season {
  return {
    description: net.description,
    id: net.id,
    imageLocation: net.image_location,
    key: net.key,
    num: net.num,
    podcastId: net.podcast_id,
    subtitle: net.subtitle,
    title: net.title
  };
}

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) {
  }

  getByNum(num: number, podcastId: number): Observable<Season> {
    return this.http.get<SeasonNet>(`${ environment.apiUrl }/podcasts/${ podcastId }/seasons/${ num }`)
      .pipe(map(mapFromSeasonNet));
  }

  getLast(podcastId: number): Observable<Season> {
    return this.http.get<SeasonNet>(`${ environment.apiUrl }/podcasts/${ podcastId }/seasons/last`)
      .pipe(map(mapFromSeasonNet));
  }

  getAllByPodcast(podcastId: number): Observable<Season[]> {
    return this.http.get<SeasonNet[]>(`${ environment.apiUrl }/podcasts/${ podcastId }/seasons`)
      .pipe(map(seasons => seasons.map(mapFromSeasonNet)));
  }

}
