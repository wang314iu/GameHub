import useData from "./useData";

export interface Genre {
  name: string;
  id: number;
  game_count: number;
  image_background: string;
}

const useGenre = () => {
  return useData<Genre>("/genres");
};
export default useGenre;
