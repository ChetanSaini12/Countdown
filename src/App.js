import logo from "./logo.svg";
import "./App.css";
import Content from "./Components/Content";
import { useState } from "react";

function App() {
  const [mint, setmint] = useState("");
  const [secnd, setsecnd] = useState("");
  return (
    <div className="App">
      <form>
        <div>
          <label className="label">
            <span className="label-text">Minutes:</span>
          </label>
          <input
            type="text"
            value={mint}
            className="input input-bordered input-sm  max-w-xs"
            onChange={(event) => setmint(event.target.value)}
          />
        </div>
        <div>
        <label className="label">
            <span className="label-text">Seconds:</span>
          </label>
          <input
            type="text"
            value={secnd}
            className="input input-bordered input-sm max-w-xs"
            onChange={(event) => setsecnd(event.target.value)}
          />
        </div>
      </form>
      <Content mn={mint} sc={secnd} />
    </div>
  );
}

export default App;
