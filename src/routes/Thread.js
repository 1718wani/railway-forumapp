import { useParams } from "react-router-dom";
import * as React from "react";
import { PostListContainer } from "../components/PostListContainer";
import { fetchedThreadObjListAtom } from "../atoms/Atoms";
import { useRecoilValue } from "recoil";

const Thread = () => {
  const Atom = useRecoilValue(fetchedThreadObjListAtom);
  console.log(Atom);
  const { threadId } = useParams();

  const chosenTitle = Atom.find(({ id }) => id === threadId).title;

  console.log(chosenTitle);

  return (
    <div>
      <h2>これが{chosenTitle}のページです。</h2>
      <PostListContainer threadId={threadId} />
    </div>
  );
};

export default Thread;
