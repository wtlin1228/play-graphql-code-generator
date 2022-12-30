import logo from "./logo.svg";
import "./App.css";
import Films from "./apollo-client-plugin/components/Films";
import FilmsJS from "./apollo-client-plugin/components/FilmsJS";
import FilmsWithFragmentMasking from "./client-preset-with-fragment-masking/components/Films";
import FilmsJSWithFragmentMasking from "./client-preset-with-fragment-masking/components/FilmsJS";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>TS</h3>
        <Films />
        <h3>JS</h3>
        <FilmsJS />
        <h3>TS with Fragment Masking</h3>
        <FilmsWithFragmentMasking />
        <h3>JS with Fragment Masking</h3>
        <FilmsJSWithFragmentMasking />
      </header>
    </div>
  );
}

export default App;
