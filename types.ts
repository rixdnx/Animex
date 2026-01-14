
export interface Anime {
  id: string;
  title: string;
  image: string;
  banner?: string;
  rating: string;
  episodes: number;
  year: string;
  genres: string[];
  description: string;
  progress?: number; // 0 to 100
  currentEpisode?: number;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  image: string;
}

export type AppView = 'home' | 'genre' | 'details' | 'schedule' | 'library' | 'download';

export interface AppState {
  currentView: AppView;
  selectedAnime?: Anime;
  selectedGenre?: string;
}
