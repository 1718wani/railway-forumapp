import { useParams } from "react-router-dom";
import * as React from 'react';

const Thread = () => {
  const threadId  = useParams();
  console.log(threadId);
  return (
    <div>
      <h2>thread {threadId}</h2>;
    </div>
  );
};

export default Thread;
