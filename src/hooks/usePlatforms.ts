import { Platform } from "../types/platform";
import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
