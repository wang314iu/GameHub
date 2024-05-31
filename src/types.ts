export interface Genre {
  name: string;
  id: number;
  games_count: number;
  image_background: string;
}
export interface SortBy {
  name: string;
  value: string;
}
export interface Platform {
  name: string;
  slug: string;
  id: number;
}

export interface Game {
  name: string;
  id: number;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
}

export interface GameInfo {
  name: string;
  description: string;
  website: string;
  released: string;
  platforms: Platform[];
}
