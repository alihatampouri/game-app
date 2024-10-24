import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformFilter from "./components/PlatformFilter";
import { GameQuery } from "./types/game";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import "./App.css";

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" padding="2rem">
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main" padding="2rem">
                <Box paddingLeft="1rem">
                    <GameHeading gameQuery={gameQuery} />
                    <HStack marginBottom="1rem" spacing="1rem">
                        <PlatformFilter
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        />
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </Box>
            </GridItem>
        </Grid>
    );
}

export default App;
