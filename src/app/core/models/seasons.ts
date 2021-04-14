/**
 * Part of the API. Represents a podcast season.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export interface Season {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageLocation: string;
  podcastId: number;
  num: number;
  key: string;
}
