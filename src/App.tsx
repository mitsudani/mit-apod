import { useState } from "react";
import Layout from "./components/Layout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  const [isReady, setIsReady] = useState(false);
  (document as any).fonts.load("16px Mukta");
  (document as any).fonts.load("16px Ms Madi");
  (document as any).fonts.ready.then(() => setIsReady(true));

  return isReady ? (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  ) : (
    <div>TODO LOADER COMPONENT</div>
  );
}

export default App;
