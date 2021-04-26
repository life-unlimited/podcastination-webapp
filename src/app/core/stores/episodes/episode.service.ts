import { Injectable } from '@angular/core';
import { Episode } from '../../models/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class EpisodeService {

  abstract getAllBySeason(seasonId: number): Observable<Episode[]>;

}
