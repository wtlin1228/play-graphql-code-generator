import {
  aFilm,
  aFilmCharactersConnection,
  aFilmPlanetsConnection,
  aFilmSpeciesConnection,
  aFilmStarshipsConnection,
  aFilmVehiclesConnection,
} from "../__generated__/generated-mocks";
import { mockAllFilmsWithVariablesQuery as typedMockAllFilmsWithVariablesQuery } from "../__generated__/generated-types";

const generateFilm = () =>
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
  });

export const mockAllFilmsWithVariablesQuery = () => {
  typedMockAllFilmsWithVariablesQuery((req, res, ctx) => {
    const { first } = req.variables;
    const films = Array.from({ length: first }).map(generateFilm);
    return res(
      ctx.data({
        allFilms: {
          edges: films.map((film) => ({ node: film })),
        },
      })
    );
  });
};
