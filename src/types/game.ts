import { Genre } from "./genre";
import { Platform } from "./platform";
import { Publisher } from "./publisher";

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}
