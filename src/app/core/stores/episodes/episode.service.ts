import { Injectable } from '@angular/core';
import { Episode } from '../../models/episode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { prettifyDate } from '../../utils/time-utils';

interface EpisodeNet {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  description: string;
  image_location: string;
  mp3_location: string;
  mp3_length: number;
  season_id: number;
  num: number;
  yt_url: string;
  is_available: boolean;
  pdf_location: string;
}

function mapFromEpisodeNet(net: EpisodeNet): Episode {
  return {
    author: net.author,
    date: prettifyDate(new Date(net.date)),
    description: net.description,
    id: net.id,
    imageLocation: net.image_location,
    pdfLocation: net.pdf_location,
    mp3Length: net.mp3_length,
    mp3Location: net.mp3_location,
    num: net.num,
    seasonId: net.season_id,
    subtitle: net.subtitle,
    title: net.title,
    youTubeUrl: net.yt_url
  };
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) {
  }

  getAllBySeason(seasonId: number): Observable<Episode[]> {
    return this.http.get<EpisodeNet[]>(`${ environment.apiUrl }/seasons/${ seasonId }/episodes`)
      .pipe(map(episodes => episodes.map(mapFromEpisodeNet)));
  }

}
