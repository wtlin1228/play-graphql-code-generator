import logo from "./logo.svg";
import "./App.css";
import FilmsWithApolloClient from "./apollo-client-plugin/components/Films";
import FilmsJSWithApolloClient from "./apollo-client-plugin/components/FilmsJS";
import FilmsWithClientPreset from "./client-preset-with-fragment-masking/components/Films";
import FilmsJSWithClientPreset from "./client-preset-with-fragment-masking/components/FilmsJS";
import FilmsWithFragmentMasking from "./client-preset-with-fragment-masking/components/Films";
import FilmsJSWithFragmentMasking from "./client-preset-with-fragment-masking/components/FilmsJS";

import "./msw/demo/generate-a-film";
import "./zod/demo/validate-a-film";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>TS with Apollo Client</h3>
        <FilmsWithApolloClient />
        <h3>JS with Apollo Client</h3>
        <FilmsJSWithApolloClient />

        <h3>TS with Client Preset</h3>
        <FilmsWithClientPreset />
        <h3>JS with Client Preset</h3>
        <FilmsJSWithClientPreset />

        <h3>TS with Fragment Masking</h3>
        <FilmsWithFragmentMasking />
        <h3>JS with Fragment Masking</h3>
        <FilmsJSWithFragmentMasking />
      </header>
    </div>
  );
}

export default App;
