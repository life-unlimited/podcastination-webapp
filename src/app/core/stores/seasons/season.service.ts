import { Injectable } from '@angular/core';
import { Season } from '../../models/seasons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class SeasonService {

  abstract getByNum(num: number, podcastId: number): Observable<Season>;

  abstract getLast(podcastId: number): Observable<Season>;

  abstract getAllByPodcast(podcastId: number): Observable<Season[]>;

}
