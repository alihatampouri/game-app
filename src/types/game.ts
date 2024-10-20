import { Genre } from "./genre";
import { Platform } from "./platform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}
