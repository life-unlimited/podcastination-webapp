import { Component, OnInit } from '@angular/core';
import { Episode } from '../../../core/models/episode';
import { Season } from '../../../core/models/seasons';

@Component({
  selector: 'app-episode-component',
  templateUrl: './episode-component.component.html',
  styleUrls: ['./episode-component.component.css']
})
export class EpisodeComponentComponent implements OnInit {

  player = new Audio();

  episode: Episode = {
    id: 2,
    title: 'Ich bin ein Titel',
    subtitle: 'Ich bin ein untertitel',
    date: '2021-04-02 12:34:21',
    author: 'Lennart Altenhof',
    description: 'Ich bin ein sehr informativer Text, der mega interessant zu lesen ist.',
    imageLocation: '/1/blablabla/thumb.png',
    mp3Location: '/1/blablabla/die-datei.mp3',
    mp3Length: 1234,
    seasonId: 3,
    num: 3,
    youTubeUrl: 'https://youtube.com/blabla-ich-bin-ein-video',
  };

  season: Season = {
    id: 1,
    title: '2021',
    subtitle: 'Das Jahr 2021',
    description: 'Ich bin eine sinnlose Beschreibung',
    imageLocation: '/1/s-2021/thumb.png',
    key: '2021',
    num: 3,
    podcastId: 1
  };

  constructor() {
  }

  ngOnInit(): void {
    this.stream('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  }

  private stream(mp3Url: string): void {
    this.player.src = mp3Url;
    this.player.load();
    this.player.play();
  }

  play(): void {

  }

}
