import { useQuery } from "@apollo/client";
import React from "react";
import { AllFilmsWithVariablesDocument } from "../__generated__/graphql";

/** @typedef {import("../__generated__/graphql").FilmItemFragment} FilmItemFragment */

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

const Films = () => {
  const { loading, data } = useQuery(AllFilmsWithVariablesDocument, {
    variables: { first: 2 },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data &&
        data.allFilms?.edges?.map(
          (e) => e?.node && <Film film={e.node} key={`film-${e.node.id}`} />
        )}
    </div>
  );
};

export default Films;
