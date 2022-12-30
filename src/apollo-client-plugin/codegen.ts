import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/apollo-client-plugin/**/*.{gql,graphql}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/apollo-client-plugin/__generated__/generated-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
