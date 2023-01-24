import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChosenThreadStatusProvider } from "./components/providers/ChosenThreadStatusProvider";

ReactDOM.render(
  <ChosenThreadStatusProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChosenThreadStatusProvider>,

  document.getElementById("root")
);
