import { useQuery } from "@apollo/client";
import React from "react";
import { graphql, useFragment, FragmentType } from "../__generated__";

const Film_FilmFragment = graphql(/* GraphQL */ `
  fragment Film_FilmFragment on Film {
    id
    title
    releaseDate
    producers
    director
  }
`);

type FilmWithMaskingProps = {
  film: FragmentType<typeof Film_FilmFragment>;
};

const FilmWithMasking: React.FC<FilmWithMaskingProps> = (props) => {
  const film = useFragment(Film_FilmFragment, props.film);
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

const AllFilmsDocument = graphql(/* GraphQL */ `
  query AllFilmsQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          ...Film_FilmFragment
        }
      }
    }
  }
`);

const FilmsWithMasking: React.FC = () => {
  const { loading, data } = useQuery(AllFilmsDocument, {
    variables: { first: 2 },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data &&
        data.allFilms?.edges?.map(
          (e) =>
            e?.node && (
              <FilmWithMasking film={e.node} key={`film-${e.node.id}`} />
            )
        )}
    </div>
  );
};

export default FilmsWithMasking;
