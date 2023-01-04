import { FilmSchema } from "../__generated__/validators";

const film = {
  __typename: "Film1",
  id: 12345,
};

const filmSchema = FilmSchema();

filmSchema.parse(film);
// Uncaught ZodError: [
//   {
//     "code": "invalid_literal",
//     "expected": "Film",
//     "path": [
//       "__typename"
//     ],
//     "message": "Invalid literal value, expected \"Film\""
//   },
//   {
//     "code": "invalid_type",
//     "expected": "string",
//     "received": "number",
//     "path": [
//       "id"
//     ],
//     "message": "Expected string, received number"
//   }
// ]
