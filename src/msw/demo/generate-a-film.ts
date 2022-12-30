import {
  aFilm,
  aFilmCharactersConnection,
  aFilmPlanetsConnection,
  aFilmSpeciesConnection,
  aFilmStarshipsConnection,
  aFilmVehiclesConnection,
} from "../__generated__/generated-mocks";

console.log(
  JSON.stringify(
    aFilm({
      characterConnection: aFilmCharactersConnection({
        edges: [],
        characters: [],
      }),
      planetConnection: aFilmPlanetsConnection({
        edges: [],
        planets: [],
      }),
      speciesConnection: aFilmSpeciesConnection({
        edges: [],
        species: [],
      }),
      starshipConnection: aFilmStarshipsConnection({
        edges: [],
        starships: [],
      }),
      vehicleConnection: aFilmVehiclesConnection({
        edges: [],
        vehicles: [],
      }),
    }),
    null,
    2
  )
);
