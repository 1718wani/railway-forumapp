import { useParams } from "react-router-dom";
import * as React from "react";
import { PostListContainer } from "../components/PostListContainer";

const Thread = () => {
  const { threadId } = useParams();
  return (
    <div>
      <h2>これが{threadId}のページです。</h2>
      <PostListContainer threadId={threadId} />
    </div>
  );
};

export default Thread;
