import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: [
    "src/client-preset-with-fragment-masking/**/*.{tsx,jsx}",
    "!src/client-preset-with-fragment-masking/__generated__/**/*",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/client-preset-with-fragment-masking/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
