import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.{gql,graphql}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/msw/__generated__/generated-types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-msw"],
    },
    "src/msw/__generated__/generated-mocks.ts": [
      {
        "graphql-codegen-typescript-mock-data": {
          typesFile: "./generated-types.ts",
          typenames: "keep",
        },
      },
    ],
  },
};

export default config;
