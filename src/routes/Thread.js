import { useParams } from "react-router-dom";
import * as React from "react";
import { PostListContainer } from "../components/PostListContainer";
import { useContext } from "react";
import { ChosenThreadStatusContext } from "../components/providers/ChosenThreadStatusProvider";

const Thread = () => {
  const { threadId } = useParams();
  const { fetchedThreadObjList } = useContext(ChosenThreadStatusContext);
  const threadTitle = fetchedThreadObjList.find(
    ({ id }) => id === threadId
  ).title;
  console.log(fetchedThreadObjList);

  return (
    <div>
      <h2>これが{threadTitle}のページです。</h2>
      <PostListContainer threadId={threadId} />
    </div>
  );
};

export default Thread;
