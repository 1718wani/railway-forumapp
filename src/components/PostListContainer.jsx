import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const PostListContainer = (props) => {
  const [postList, setPostList] = useState([]);
  const [newPost, setNewPost] = useState({post: ""})

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get(
          `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts?offset=0`
        );
        const fetchedPostData = await response.data.posts;
        console.log(fetchedPostData.posts);
        const fetchedPostDataList = [];
        fetchedPostData.map((e) => {
          fetchedPostDataList.push(e["post"]);
        });
        setPostList(fetchedPostDataList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPostList();
  }, []);

  const onClickmakePostButton = async () => {
    await axios.post(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts`,
      newPost,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={onClickmakePostButton}>
        <label>
          投稿をここに書いてね:
          <textarea
            id="textarea"
            placeholder="ここに書いてください"
            value={newPost.post}
            onChange={(e) => setNewPost({ post: e.target.value })}
          ></textarea>
        </label>
        <input type="submit" value="ポストする"></input>
      </form>

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
