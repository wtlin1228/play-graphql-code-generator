import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: [
    "src/with-masking/**/*.{tsx,jsx}",
    "!src/with-masking/__generated__/**/*",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/with-masking/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
