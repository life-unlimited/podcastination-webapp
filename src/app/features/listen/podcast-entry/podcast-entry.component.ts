import { Component, Input } from '@angular/core';
import { Podcast } from '../../../core/models/podcast';

/**
 * Component for displaying a podcast in the list of available podcasts.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-listen-podcast-entry',
  templateUrl: './podcast-entry.component.html',
  styleUrls: ['./podcast-entry.component.scss']
})
export class PodcastEntryComponent {

  @Input() podcast: Podcast;

}
