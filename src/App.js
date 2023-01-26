import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ThreadNew from "./routes/ThreadNew";
import NotFound from "./routes/NotFound";
import Thread from "./routes/Thread";
import Threads from "./routes/Threads";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 *
 * @type {React.FC}
 */

const App = () => {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
