import useData from "./useData";
import { Platform } from "../types";

const useParentPlatforms = () => useData<Platform>("/platforms/lists/parents");

export default useParentPlatforms;
