import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Headers";
import { Headline } from "./components/Headline";
import { ThreadListContainer } from "./components/ThreadListContainer";
import { CreateThread } from "./components/CreateThread";

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

const Home = () => {
  return (
    <div>
      <Header
        title="掲示板"
        buttonUrlofMovetoPost="/thread/new/"
        buttonNameofMovetoPost="スレッドをたてる"
      />
      <Headline headlineName="新着スレッド" />
      <ThreadListContainer />
    </div>
  );
};

const ThreadNew = () => {
  return (
    <div>
      <Header title="投稿ページです" />
      <CreateThread />
    </div>
  );
};

const NotFound = () => {
  return <h2>Not Found Page</h2>;
};
