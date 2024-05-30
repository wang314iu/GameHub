import useData from "./useData";
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

const uesGames = (params?: object, deps?: any[]) => {
  return useData<Game>("/games", params, deps);
};
export default uesGames;
