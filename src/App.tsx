import logo from "./logo.svg";
import "./App.css";
import Films from "./without-masking/components/Films";
import FilmsJS from "./without-masking/components/FilmsJS";
import FilmsWithMasking from "./with-masking/components/FilmsWithMasking";
import FilmsWithMaskingJS from "./with-masking/components/FilmsWithMaskingJS";

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
        <FilmsWithMasking />
        <h3>JS with Fragment Masking</h3>
        <FilmsWithMaskingJS />
      </header>
    </div>
  );
}

export default App;
