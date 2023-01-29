import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../const";

export const PostListContainer = (props) => {
  // APIの形のままで持っている。
  const [postList, setPostList] = useState([]);
  // textareaのvalueをPostにわたすのでこの形に
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}threads/${props.threadId}/posts?offset=0`
        );
        const fetchedPostData = await response.data.posts;
        setPostList(fetchedPostData)
      } catch (e) {
        console.log(e);
      }
    };
    fetchPostList();
  });

  const onClickmakePostButton = async (e) => {
    e.preventDefault();
    try{
      await axios.post(
        `${baseUrl}threads/${props.threadId}/posts`,
        {post: newPost},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }catch(e){
      console.log(e)
    }
    // 投稿成功時はtextareの中身を空にする
    setNewPost("");
    toast.success("投稿が完了しました!");
  };

  return (
    <div>
      <form onSubmit={onClickmakePostButton}>
        <label>
          投稿をここに書いてね:
          <textarea
            id="textarea"
            placeholder="ここに書いてください"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            required
          ></textarea>
        </label>
        <input type="submit" value="ポストする"></input>
      </form>

      <table>
        <tbody>
          {postList.map((oneObj) => {
            return (
              <tr key={oneObj.id}>
                <td className="insideTableParagraph">{oneObj.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
