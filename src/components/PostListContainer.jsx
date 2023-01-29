import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../const";

export const PostListContainer = (props) => {
    // そのままの形でもっておいていい
  const [postList, setPostList] = useState([]);
  // textareaのvalueをPostになるので、
  const [newPost, setNewPost] = useState({ post: "" });

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}threads/${props.threadId}/posts?offset=0`
        );
        const fetchedPostData = await response.data.posts;
        console.log(fetchedPostData.posts);
        const postList = fetchedPostData.map((e) => e["post"])

        setPostList(postList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPostList();
  });

  const onClickmakePostButton = async (e) => {
    e.preventDefault();
    await axios.post(
      `${baseUrl}threads/${props.threadId}/posts`,
      newPost,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Try catch の場合この行に書く
    toast.success("投稿が完了しました!");
    setNewPost({ post: "" });
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
            required
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
