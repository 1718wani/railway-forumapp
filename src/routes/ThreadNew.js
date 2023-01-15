import { CreateThread } from "../components/CreateThread";
import { Header } from "../components/Header";
import * as React from 'react';

export const ThreadNew = () => {
  return (
    <div>
      <Header title="投稿ページです" />
      <CreateThread />
    </div>
  );
};
export default ThreadNew;
