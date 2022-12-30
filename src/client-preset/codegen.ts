import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.{gql,graphql}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/client-preset/__generated__/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [],
    },
  },
};

export default config;
