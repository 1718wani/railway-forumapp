import * as React from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import ThreadNew from './routes/ThreadNew';
import NotFound from './routes/NotFound';


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
          <Route element={<NotFound />} />
        </Routes>  
      </div>
  );
};

export default App;