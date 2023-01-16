import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ThreadNew from "./routes/ThreadNew";
import NotFound from "./routes/NotFound";
import Thread from "./routes/Thread";
import Threads from "./routes/Threads";

/**
 *
 * @type {React.FC}
 */

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<ThreadNew />} />
        <Route path="/threads" element={<Threads />}>
          <Route path=":threadId" element={<Thread />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
