import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.{gql,graphql}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/zod/__generated__/validators.ts": {
      plugins: ["typescript-validation-schema"],
      config: {
        schema: "zod",
        importFrom: "../types",
        withObjectType: true,
      },
    },
  },
};

export default config;
