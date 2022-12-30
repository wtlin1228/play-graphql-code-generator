import { faker } from "@faker-js/faker";
import { FilmItemFragment } from "../__generated__/generated-types";
import { mockAllFilmsWithVariablesQuery as typedMockAllFilmsWithVariablesQuery } from "../__generated__/generated-types";

const aFilm: () => FilmItemFragment = () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(),
  releaseDate: faker.date.past().toDateString(),
  producers: [],
  director: faker.name.fullName(),
});

export const mockAllFilmsWithVariablesQuery = () => {
  typedMockAllFilmsWithVariablesQuery((req, res, ctx) => {
    const { first } = req.variables;
    const films = Array.from({ length: first }).map(aFilm);
    return res(
      ctx.data({
        allFilms: {
          edges: films.map((film) => ({ node: film })),
        },
      })
    );
  });
};
