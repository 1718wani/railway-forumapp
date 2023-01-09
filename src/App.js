import * as React from "react";
import "./App.css";
import { Header } from "./components/Headers";
import { Headline } from "./components/Headline";
import { PostListContainer } from "./components/PostListContainer";

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <body>
      <div>
        <Header title="掲示板" />
        <Headline headlineName="新着スレッド" />
        <PostListContainer />
      </div>
    </body>
  );
};
