import { create } from "zustand";
import { GameQuery } from "./types/game";

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearch: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) =>
        set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, genreId } })),
    setPlatformId: (platformId) =>
        set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, platformId } })),
    setSortOrder: (sortOrder) =>
        set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
