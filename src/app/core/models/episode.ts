/**
 * Part of the API. Represents a podcast episode.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
export interface Episode {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  description: string;
  imageLocation: string;
  pdfLocation: string;
  mp3Location: string;
  mp3Length: number;
  seasonId: number;
  num: number;
  youTubeUrl: string;
}
