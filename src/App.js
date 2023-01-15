import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './routes/Home';
import ThreadNew from './routes/ThreadNew';
import NotFound from './routes/NotFound';


/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/thread/new/">
            <ThreadNew />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};