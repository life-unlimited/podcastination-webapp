/**
 * Part of the API. Represents a podcast.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export interface Podcast {
  id: number;
  title: string;
  subtitle: string;
  language: string;
  owner: number;
  description: string;
  keywords: string[];
  link: string;
  feedLink: string;
  imageLocation: string;
  podcastType: string;
  key: string;
}
