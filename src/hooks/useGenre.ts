import useData from "./useData";

export interface Genre {
  name: string;
  id: number;
  game_count: number;
}

const useGenre = () => {
  return useData<Genre>("/genres");
};
export default useGenre;
