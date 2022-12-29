import React from "react";
import { useAllFilmsWithVariablesQuery } from "../__generated__/generated-types";

/** @typedef {import("../__generated__/generated-types").FilmItemFragment} FilmItemFragment */

/**
 * @type {React.FC<{ film: FilmItemFragment }>}
 */
const Film = ({ film }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "24px 0",
        padding: "12px",
        border: "4px dashed #967333",
      }}
    >
      <div>Title: {film.title}</div>
      <div>Release Date: {film.releaseDate}</div>
      <div>Producers: {film.producers?.join(", ")}</div>
      <div>Director: {film.director}</div>
    </div>
  );
};

function FilmsJS() {
  const { loading, data } = useAllFilmsWithVariablesQuery({
    variables: { first: 2 },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  /**
   * @type {FilmItemFragment[] | undefined}
   */
  const films = data?.allFilms?.edges?.reduce((acc, curr) => {
    if (curr && curr.node) {
      acc.push(curr.node);
    }
    return acc;
  }, []);

  if (!films) {
    return <div>something went wrong</div>;
  }

  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsJS;
