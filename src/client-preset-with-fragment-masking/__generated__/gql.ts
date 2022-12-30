/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment Film_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n": types.Film_FilmFragmentFragmentDoc,
    "\n  query AllFilmsQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n": types.AllFilmsQueryDocument,
    "\n  fragment FilmJS_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n": types.FilmJs_FilmFragmentFragmentDoc,
    "\n  query AllFilmsJSQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n": types.AllFilmsJsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Film_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n"): (typeof documents)["\n  fragment Film_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllFilmsQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllFilmsQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FilmJS_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n"): (typeof documents)["\n  fragment FilmJS_FilmFragment on Film {\n    id\n    title\n    releaseDate\n    producers\n    director\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllFilmsJSQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllFilmsJSQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          ...Film_FilmFragment\n        }\n      }\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;