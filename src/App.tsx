import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./types/genre";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./types/platform";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" padding="2rem">
                    <GenreList
                        selectedGenre={selectedGenre}
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area="main" padding="2rem">
                <PlatformFilter
                selectedPlatform={selectedPlatform}
                    onSelectPlatform={(platform) =>
                        setSelectedPlatform(platform)
                    }
                />
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
            </GridItem>
        </Grid>
    );
}

export default App;
