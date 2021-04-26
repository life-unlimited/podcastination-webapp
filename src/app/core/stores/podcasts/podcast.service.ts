import { Podcast } from '../../models/podcast';
import { Observable } from 'rxjs';

export abstract class PodcastService {

  abstract getByKey(key: string): Observable<Podcast>;

}
