import useData from "./useData";
import { Game } from "../types";

const uesGames = (params?: object, deps?: any[]) => {
  return useData<Game>(`/games`, params, deps);
};
export default uesGames;
