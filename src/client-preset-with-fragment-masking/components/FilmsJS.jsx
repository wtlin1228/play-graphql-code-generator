import { useQuery } from "@apollo/client";
import { graphql, useFragment } from "../__generated__";

/** @typedef {import("../__generated__/graphql").FilmJS_FilmFragmentFragment} FilmJS_FilmFragmentFragment */

const FilmJS_FilmFragment = graphql(/* GraphQL */ `
  fragment FilmJS_FilmFragment on Film {
    id
    title
    releaseDate
    producers
    director
  }
`);

/**
 * @type {React.FC<{ film: FilmJS_FilmFragmentFragment }>}
 */
const FilmWithMasking = (props) => {
  const film = useFragment(FilmJS_FilmFragment, props.film);
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

const AllFilmsJSDocument = graphql(/* GraphQL */ `
  query AllFilmsJSQuery($first: Int!) {
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

const FilmsWithMaskingJS = () => {
  const { loading, data } = useQuery(AllFilmsJSDocument, {
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

export default FilmsWithMaskingJS;
