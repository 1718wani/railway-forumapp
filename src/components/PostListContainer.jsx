import * as React from "react";
import { useEffect, useState } from "react";

export const PostListContainer = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get(
          `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts?offset=0`
        );
        const fetchedPostData = await response.data;
        const fetchedPostDataList = [];
        fetchedPostData.map((e) => {
          fetchedPostDataList.push(e["post"]);
        });
        setPostList(fetchedPostDataList)
      } catch (e) {
        console.log(e);
      }
      fetchPostList();
    };
  });

  return (
    <div>
      <table>
        <tbody>
          {postList.map((onePost) => {
            return (
              <tr key={onePost}>
                <td className="insideTableParagraph">{onePost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
