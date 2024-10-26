import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformFilter from "../components/PlatformFilter";
import SortSelector from "../components/SortSelector";

function HomePage() {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area="aside" padding="2rem">
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main" padding="2rem">
                <Box paddingLeft="1rem">
                    <GameHeading />
                    <HStack marginBottom="1rem" spacing="1rem">
                        <PlatformFilter />
                        <SortSelector />
                    </HStack>
                    <GameGrid />
                </Box>
            </GridItem>
        </Grid>
    );
}

export default HomePage;
